var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
      type: String
  }
});
var Model = mongoose.model('Users', userSchema);
module.exports = Model;