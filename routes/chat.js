var express = require("express");
const ChatController = require("../controllers/ChatController");
var router = express.Router();

router.post("/create", ChatController.create);
router.post("/getDashboard", ChatController.getDashboard);
router.post("/getChatHistory", ChatController.getChatHistory);
module.exports = router;
