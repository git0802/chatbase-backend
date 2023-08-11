var express = require("express");
const AuthController = require("../controllers/AuthController");

var router = express.Router();

router.post("/login", AuthController.signIn);
// router.post("/verify-otp", AuthController.verifyConfirm);
// router.post("/resend-verify-otp", AuthController.resendConfirmOtp);

module.exports = router;

