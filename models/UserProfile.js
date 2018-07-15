const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    unique: true,
    max: 40
  },
  location: {
    type: String
  },
  status: {
    type: String
  },
  bio: {
    type: String
  },
  age: {
    type: String
  },
  ethnicity: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);
