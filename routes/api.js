var express = require("express");
const multer = require("multer");

var authRouter = require("./auth");
var chatRouter = require("./chat");
var botSetting = require("./botSetting");
const authToken = require("../middleware/authToken");

var app = express();

app.use("/auth/", authRouter);
app.use("/chat/", chatRouter);
app.use("/setting/", botSetting);

module.exports = app;
