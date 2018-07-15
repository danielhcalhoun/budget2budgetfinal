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
    max: 40
  },
  bio: {
    type: String
  },
  age: {
    type: Number
  },
  ethnicity: {
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);
