const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: "You need to enter a rating!",
  },
  comment: {
    type: String,
    required: "You need to enter a comment!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  menuItem: {
    type: Schema.Types.ObjectId,
    ref: "MenuItem",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
