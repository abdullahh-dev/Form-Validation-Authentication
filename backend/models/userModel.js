const { mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: [String, 'Please enter your username'],
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: [String, 'Please enter your email'],
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: [8, 'Must be at least 8 characters'],
  },
  posts: {
    
  },
});

export const User = mongoose.model('User', userSchema);
