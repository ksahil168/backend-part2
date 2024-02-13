/* intermediate mongodb
How can I perform a case-insensitive search in Mongoose?
How do I find documents where an array field contains all of a set of values?
How can I search for documents with a specific date range in Mongoose?
How can I filter documents based on the existence of a field in Mongoose?
How can I filter documents based on a specific field's Mongoose?
*/

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingendgame2");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: [],
  },
  datecreated: {
    type: Date,
    default: Date.now(),
  },
});
