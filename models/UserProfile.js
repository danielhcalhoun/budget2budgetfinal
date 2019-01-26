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
      name: {
        type: String,
        required: true,
        default: ""
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
  ],
  expenses: [
    {
      name: {
        type: String,
        default: "",
        required: true
      },
      cost: {
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
    }
  ]
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);
