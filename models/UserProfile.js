const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Paychecks Schema
// const PaycheckSchema = new Schema({
//   income: {
//     type: Number,
//     required: true
//   },
//   date: {
//     type: String,
//     required: true
//   },
//   recurring: {
//     type: Boolean,
//     default: false
//   }
// });

//Create Schema
const UserProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  paychecks: [
    {
      income: {
        type: Number
      },
      date: {
        type: Date
      },
      recurring: {
        type: Boolean,
        default: false
      }
      // {
      //   income: Number,
      //   date: String,
      //   recurring: Boolean
      // recurringPattern: {
      //   //daily, weekly, monthly
      //   recurringType: String,
      //   //every x weeks or months
      //   separationCount: Number,
      //   dayOfWeek: Number,
      //   weekOfMonth: Number,
      //   monthOfYear: Number,
      //   isRescheduled: String,
      //   isCancelled: String,
      //   idParentEvent: Number
      // }
      // }
    }
  ]
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);
