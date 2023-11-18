const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const schoolSchema = new Schema({
  name: {
    type: String,
    required: 'You need to enter a name!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    required: 'You need to enter an address!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
  },
  city: {
    type: String,
    required: 'You need to enter a city!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  state: {
    type: String,
    required: 'You need to enter a state!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  zip: {
    type: String,
    required: 'You need to enter a zip code!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  phone: {
    type: String,
    required: 'You need to enter a phone number!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: 'You need to enter an email address!',
    minlength: 1,
    maxlength: 280,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MenuItem',
    },
  ],
  menus: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DailyMenu',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const School = model('School', schoolSchema);

module.exports = School;
