var mongoose = require("mongoose");
const { INTEGER, INET } = require("sequelize");

const BotSettingSchema = new mongoose.Schema(
  {
    characters_number: Number,
    chatbot_name: String,
    base_prompt: String,
    model: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Model",
    },
    visibility: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Visibility",
    },
    domain: String,
    rate_msg: Number,
    rate_second: Number,
    limit_msg: String,
    interface_init_msg: String,
    interface_suggest_msg: String,
    theme: String,
    profile_picture: String,
    remove_profile_picture: Boolean,
    display_name: String,
    user_msg_color: String,
    chat_icon: String,
    remove_icon: Boolean,
    bubble_btn_color: String,
    align_bubble_btn: String,
    auto_msg_second: Number,
    required_login: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const BotThemeSchema = new mongoose.Schema({
  name: String,
  color: String,
});

const ModelSchema = new mongoose.Schema({
  model_name: String,
});

const Visibility = new mongoose.Schema({
  visible_name: String,
});

const BotTheme = mongoose.model("BotTheme", BotThemeSchema);
const BotSetting = mongoose.model("BotSetting", BotSettingSchema);
const Model = mongoose.model("Model", ModelSchema);
const Visible = mongoose.model("Visibility", Visibility);

module.exports = {
  BotTheme,
  BotSetting,
  Model,
  Visible,
};
