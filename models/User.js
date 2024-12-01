const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ROLES = require('../constants/roles');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ROLES, 
    default: "User"
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
