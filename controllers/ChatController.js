const ChatHistoryModel = require("../models/ChatHistoryModel");
const resMsg = require("../helpers/responseMessage");
const date = require("date-and-time");
const { ObjectId } = require("mongodb");
const { types } = require("pg");
const { Types } = require("mongoose");
const { PineconeClient } = require("@pinecone-database/pinecone");
const { PineconeStore } = require("langchain/vectorstores/pinecone");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { OpenAI } = require("langchain/llms/openai");
const {
  ConversationalRetrievalQAChain,
  LLMChain,
  loadQAChain,
  StuffDocumentsChain,
} = require("langchain/chains");

require("dotenv").config();

exports.create = async (req, res) => {
  try {
    const userData = req.body;
    console.log("userData: ", userData);

    const now = new Date();

    const current_today = date.format(now, "YYYY-MM-DD");

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const limit_time = new Date(
      year,
      month,
      day,
      hours,
      mins - process.env.CONVERSATION_LIMIT_MIN,
      secs
    );

    // **chat_response

    const client = new PineconeClient();
    await client.init({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT,
    });
    const pineconeIndex = client.Index(process.env.PINECONE_INDEX);

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
      { pineconeIndex, namespace: userData.chatbot_id }
    );

    const llm = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0,
    });
    const results = await vectorStore.similaritySearch(userData.message, 5);
    const chain = loadQAChain(llm, { type: "stuff" });

    let message = [];
    var rowletter;

    const result = await chain
      .call({
        input_documents: results.map((item) => item.pageContent),
        question: userData.message,
      })
      .then((row) => {
        rowletter = row;

        message = [
          { role: "1", content: userData.message },
          { role: "0", content: row.text },
        ];
      });

    let doc = await ChatHistoryModel.updateOne(
      {
        chatbot_id: new ObjectId(userData.chatbot_id),
        updatedAt: { $gte: limit_time },
      },
      {
        update_date: current_today,
        $push: {
          message: message,
        },
      }
    );

    if (doc.modifiedCount == 0) {
      await ChatHistoryModel.insertMany({
        chatbot_id: new ObjectId(userData.chatbot_id),
        update_date: current_today,
        message: message,
      });
    }

    res.json(rowletter);

    // return resMsg(res, 200, result);
  } catch (error) {
    console.log(error);
    return resMsg(res, 500, "Server error");
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const { chatbot_id } = req.body;

    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    const limit_date = new Date(
      year,
      month,
      day - process.env.DASHBOARD_LIMIT_DAY
    );
    const limit_day = date.format(limit_date, "YYYY-MM-DD");

    const conversations = await ChatHistoryModel.find({
      update_date: { $gte: limit_day },
      chatbot_id: new ObjectId(chatbot_id),
    }).populate();

    let total_msg = 0;
    let conversation_list = [];
    for (const item of conversations) {
      total_msg += item.message.length;
      conversation_list.push({
        usermsg: item.message[0].content,
        botmsg: item.message[1].content,
        Id: item._id,
        msgtime: item.update_date,
      });
    }
    const resData = {
      total_conversation: conversations.length,
      avg: total_msg / conversations.length,
      conversations: conversation_list,
    };
    return resMsg(res, 200, resData);
  } catch (err) {
    console.log(err);
    return resMsg(res, 500, "Server error");
  }
};

exports.getChatHistory = async (req, res) => {
  try {
    const id = new ObjectId(req.body.id);
    const chatHistory = await ChatHistoryModel.findById(id);
    return resMsg(res, 200, chatHistory.message);
  } catch (err) {
    console.log(err);
    return resMsg(res, 500, "Server error");
  }
};
