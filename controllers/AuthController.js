const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const {
  SUCCESS,
  SERVERERROR,
  NOTFOUND,
  EMAILORPASSWORDINVAID,
  EXIST,
} = require("../constants/errorCode");
const {
  SUCCESSMSG,
  SERVERERRORMSG,
  NOTFOUNDMSG,
  EMAILORPASSWORDINVAIDMSG,
  EXISTMSG,
} = require("../constants/errorMessage");
require("dotenv").config();

exports.signIn = async (req, res) => {
  try {
    let user;
    const { mail, type } = req.body;

    user = await User.findOne({
      mail: mail,
      mail_type: parseInt(type),
      isActive: true,
    });

    if (!user) {
      user = await User.create({
        mail: mail,
        mail_type: type,
        isActive: true,
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.token_key, {
      expiresIn: 86400,
    });
    return res.status(SUCCESS).json({ user: user, token: token });
  } catch (error) {
    return res.status(SERVERERROR).json({ message: SERVERERRORMSG });
  }
};
