// Require the mongose library
const mongoose = require('mongoose');

// Define the note's database schema
const noteSchema = new mongoose.Schema(
  {
    id:{
      type:String,
      required:true,
      index: { unique: true }
    },
    content: {
      type: String,
      required: true
    },

    author: {
      type: String,
      required: true
    }
    // favoriteCount: {
    //   type: Number,
    //   default: 0
    // },
    // favoritedBy: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    //   }
    // ]
  },
  {
    timestamps: true
  }
);


const Note = mongoose.model('note', noteSchema);

module.exports = Note;
