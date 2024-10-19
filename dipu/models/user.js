const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    id:{
      type:String,
      required: true,
      index: { unique: true }
    },
    username: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('user', UserSchema);
module.exports = User;
