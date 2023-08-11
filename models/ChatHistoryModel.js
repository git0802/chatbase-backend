var mongoose = require("mongoose");

const ChatHistorySchema = new mongoose.Schema(
  {
    chatbot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BotSetting",
    },
    update_date: String,
    message: [
      {
        role: String,
        content: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatHistory", ChatHistorySchema);
