const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProviderProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  phone: {
    type: String
  },
  gender: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String
  },
  bio: {
    type: String,
    max: 140
  },
  age: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  ethnicity: {
    type: String
  },
  bodyType: {
    type: String
  },
  likes: {
    type: [String]
  },
  dislikes: {
    type: [String]
  },
  tattoos: {
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
  },
  avatar: {
    type: String
  },
  photos: {
    type: [String]
  },
  rating: {
    type: Number
  }
});

module.exports = ProviderProfile = mongoose.model(
  "providerprofile",
  ProviderProfileSchema
);
