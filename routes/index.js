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

module.exports = router;


