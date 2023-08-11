var mongoose = require("mongoose");

var ChatbotHistorySchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    chatbot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BotSetting",
    },
  },
  { timestamps: true }
);

const ChatbotHistory = mongoose.model("ChatbotHistory", ChatbotHistorySchema);
module.exports = {
  ChatbotHistory,
};
