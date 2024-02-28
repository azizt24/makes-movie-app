import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  picture: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  savedMovies: [String],
  savedQueries: [String],
});

const User = model('User', userSchema);

export default User;
