var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

/* connect flash */

//kisi bhi route me data send kr skte ho
router.get("/failed", function (req, res) {
  req.flash("name", "kumar sahil");
  res.send("bangaya");
});
//aur doosre me use kr skte ho. iska use case hai -jab login krte hai aur login nahi hota to doosre route pe batana padta hai ki login fail hogya hai
router.get("/checkkaro", function (req, res) {
  console.log(req.flash("name"));
  res.send("check krlo terminal par");
});

module.exports = router;
