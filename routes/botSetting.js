var express = require("express");
var multer = require("multer");
const SettingController = require("../controllers/SettingController");

const DIR = "./public/";
var router = express.Router();
const authToken = require("../middleware/authToken");

router.get("/get/:chatbot_id", SettingController.get);
router.post("/iconUpload", SettingController.iconUpload);
router.post("/update", SettingController.updateSetting);
router.post("/replace_embedding", SettingController.replaceData);

router.post("/getChatList", SettingController.getChatList);
router.post("/delete_chatbot", SettingController.delete_chatbot);
router.post("/share_chatbot", SettingController.share_chatbot);

router.post("/get_require_login", SettingController.require_login);
router.post("/webScrape", SettingController.websrape);
router.post("/web_scraping_chatbot", SettingController.web_scraping_chatbot);

router.post("/create", SettingController.create);

router.post(
  "/get_embedded_visiblelist",
  SettingController.get_embedded_visiblelist
);

router.post(
  "/update_embedded_visible",
  SettingController.update_embedded_visible
);

router.post(
  "/update_embedded_domains",
  SettingController.update_embedded_domains
);

module.exports = router;
