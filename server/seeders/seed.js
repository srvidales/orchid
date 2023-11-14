const db = require('../config/connection');
const { User, MenuItem, School } = require('../models');
const menuItemSeeds = require('./menuItemSeeds.json');
const userSeeds = require('./userSeeds.json');
const schoolSeeds = require('./schoolSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('MenuItem', 'menuItems');
  await cleanDB('User', 'users');
  await cleanDB('School', 'schools');

  await MenuItem.create(menuItemSeeds);
  await User.create(userSeeds);
  await School.create(schoolSeeds);

  console.log('all done!');
  db.close();
});
