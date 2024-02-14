var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

/* connect flash */

//kisi bhi route me data send kr skte ho
/* router.get("/failed", function (req, res) {
  req.flash("name", "kumar sahil");
  res.send("bangaya");
}); */

//aur doosre me use kr skte ho. iska use case hai -jab login krte hai aur login nahi hota to doosre route pe batana padta hai ki login fail hogya hai
/* router.get("/checkkaro", function (req, res) {
  console.log(req.flash("name"));
  res.send("check krlo terminal par");
}); */
router.get("/create", async function (req, res) {
  let userdata = await userModel.create({
    username: "sahlu",
    nickname: "sahlu",
    description: "I am a girl doing mass comm",
    categories: ["media housing", "anchoring"],
  });
  res.send(userdata);
});

//Q1 - How can I perform a case-insensitive search in Mongoose?
//as you can see if username is sahil then it finds it and if username is given Sahil then it can't, that's were we can use regex regExp
/* router.get("/find", async function (req, res){
//now u can see u can find a name wether it's letter is case sensitive or not, 'H is capital in sahil' then also it can find the name. 'i' - insensitive
  var regex = new RegExp("^SaHil$", 'i')
  let user = await userModel.find({username: regex})
  res.send(user)
}); */

//Q2- How do I find documents where an array field contains all of a set of values?
router.get("/find", async function (req, res) {
  let user = await userModel.find({ categories: { $all: ["fashion tech"] } });
  res.send(user);
});

//Q3 - How can I search for documents with a specific date range in Mongoose?
router.get("/find1", async function (req, res) {
  let date1 = new Date("2024-02-10");
  let date2 = new Date("2024-02-14");
  //gte- greater than equal , lte- less than equal
  let user = await userModel.find({
    datecreated: { $gte: date1, $lte: date2 },
  });
  res.send(user);
});

//Q4-How can I filter documents based on the existence of a field in Mongoose?

router.get("/find2", async function (req, res) {
  let user = await userModel.find({ categories: { $exists: true } });
  res.send(user);
});

//How can I filter documents based on a specific field's Mongoose?
router.get("/find3", async function (req, res) {
  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$nickname" }, 0] },
        { $lte: [{ $strLenCP: "$nickname" }, 4] },
      ],
    },
  });

  res.send(user);
});

module.exports = router;
