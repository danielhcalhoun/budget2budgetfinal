const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PaycheckSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  income: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  recurring: {
    type: Boolean,
    default: false
  }
});
