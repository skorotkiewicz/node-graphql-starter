var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
      type: Date
  }
});
var Model = mongoose.model('Posts', postSchema);
module.exports = Model;