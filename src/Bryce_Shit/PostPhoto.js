const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostPhotoSchema = new Schema({
  url: String,
  caption: String,
  location: {
    lat: Number,
    lon: Number
  },
  dateTaken: Number
});

module.exports = PostPhotoSchema;
