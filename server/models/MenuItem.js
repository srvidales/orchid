const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: 'You need to enter a name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  description: {
    type: String,
    required: 'You need to enter a description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    required: 'You need to enter a category!',
    enum: ['ENTREE', 'SIDE', 'DRINK', 'SNACK'],
  },
  school: {
    type: Schema.Types.ObjectId, ref: 'School',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const MenuItem = model('MenuItem', menuItemSchema);

module.exports = MenuItem;
