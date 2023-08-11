var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var apiResponse = require("./helpers/apiResponse");
var cors = require("cors");
var bodyParser = require("body-parser");
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth2").Strategy;
const fileupload = require("express-fileupload");

// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //don't show the log when it is test
    if (process.env.NODE_ENV !== "test") {
      console.log("Connected to %s", MONGODB_URL);
      console.log("App is running ... \n");
      console.log("Press CTRL + C to stop the process. \n");
    }
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
var db = mongoose.connection;

var app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(fileupload());
app.use(express.static("file"));

//don't show the log when it is test

if (process.env.NODE_ENV !== "test") {
  app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//To allow cross-origin requests
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);

// app.use("/upload", (req, res) => {
//   const newpath = __dirname + "/public/";
//   console.log(req);
//   const file = req.files.file;
//   const filename = file.name;

//   file.mv(`${newpath}${filename}`, (err) => {
//     if (err) {
//       res.status(500).send({ message: "File upload failed", code: 200 });
//     }
//     res.status(200).send({ message: "File Uploaded", code: 200 });
//   });
// });

// throw 404 if URL not found
app.all("*", function (req, res) {
  return apiResponse.notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
  if (err.name == "UnauthorizedError") {
    return apiResponse.unauthorizedResponse(res, err.message);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
