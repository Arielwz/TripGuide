var express = require('express');
var router = express.Router();

const myDB = require("../db/MyDB.js");

// get trips
router.get("/getTrips", async (req, res) => {
  // if (!req.session.userInfo) {
  //   return res.status(401).send({ success: false });
  // }
  res.send({ trips: await myDB.getTrips(), success: true });
});

// login
router.post("/login", async (req, res) => {
  const userInfo = req.body;

  const userRes = await myDB.searchUser(userInfo);
  if (userRes && userRes.length > 0) {
    req.session.userInfo = userInfo;
    res.send({ success: true });
    return;
  }
  return res.send({ success: false, message: "username or password error" });
});

// regist
router.post("/regist", async (req, res) => {
  const userInfo = req.body;
  const userRes = await myDB.searchUser({ username: userInfo.username });
  if (userRes && userRes.length > 0) {
    return res.send({ success: false, message: "username already exists" });
  }
  const newUser = await myDB.creatUser(userInfo);
  if (newUser) {
    req.session.userinfo = userInfo;
    return res.send({ success: true });
  }

  return res.send({ success: false, message: "regist failed" });
});

// log out
router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/index.html");
  });
});



module.exports = router;


