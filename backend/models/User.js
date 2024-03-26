const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  savedMovies: [{ type: String }],
  savedQueries: [{ type: String }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
