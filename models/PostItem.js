const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostItemSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
let PostItem = mongoose.model('postitem', PostItemSchema);
module.exports = PostItem;