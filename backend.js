const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const logger = require("morgan");
require("dotenv").config();
const fileUpload = require("express-fileupload");

const indexRouter = require("./routes/index");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "trip",
    resave: false,
    saveUninitialized: true,
    cookie:
      ("name", "value", { maxAge: 30 * 24 * 60 * 60 * 1000, secure: false }),
  })
);

app.use(express.static(path.join(__dirname, "front/build")));
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
app.use("/", indexRouter);

module.exports = app;
