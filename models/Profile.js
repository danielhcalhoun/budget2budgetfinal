const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  },
  age: {
    type: String
  },
  height: {
    type: String
  },
  bodyType: {
    type: String
  },
  tattoos: {
    type: String
  },
  ethnicity: {
    type: String
  },
  hairColor: {
    type: String
  },
  eyeColor: {
    type: String
  },
  cupSize: {
    type: String
  },
  education: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
