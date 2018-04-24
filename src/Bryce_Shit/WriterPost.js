const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WriterPostSchema = new Schema({
  Author: String,
  Date: Number,
  Content: String,
  Photos: [PostPhoto]
});

const WriterPost = mongoose.model('writerPost', WriterPostSchema);

module.exports = WriterPost;
