const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  paychecks: [
    {
      income: Number,
      date: String,
      recurring: Boolean,
      recurringPattern: {
        //daily, weekly, monthly
        recurringType: String,
        //every x weeks or months
        separationCount: Number,
        dayOfWeek: Number,
        weekOfMonth: Number,
        monthOfYear: Number,
        isRescheduled: String,
        isCancelled: String,
        idParentEvent: Number
      }
    }
  ]
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);
