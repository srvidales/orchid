const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const authSchema = new Schema({
  date: {
    type: Date,
    required: "You need to enter a date!",
    get: (timestamp) => dateFormat(timestamp),
  },
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Auth = model("AuthSchema", authSchema);

module.exports = Auth;
