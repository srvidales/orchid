const db = require('../config/connection');
const { User, MenuItem, School, DailyMenu } = require('../models');
const cleanDB = require('./cleanDB');

const menuItemSeeds = require('./menuItemSeeds.json');
const userSeeds = require('./userSeeds.json');
const schoolSeeds = require('./schoolSeeds.json');
const dailyMenuSeeds = require('./dailyMenuSeeds.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('School', 'schools');
  await cleanDB('MenuItem', 'menuitems');
  await cleanDB('DailyMenu', 'dailymenus');

  const schools = await School.create(schoolSeeds);
  const menuItems = await MenuItem.create(menuItemSeeds);
  const dailyMenus = await DailyMenu.create(dailyMenuSeeds);
  const users = await User.create(userSeeds);

  // for (newUser of users) {
  //   const school = schools[Math.floor(Math.random() * schools.length)];
  //   school.users.push(newUser);
  //   await school.save();
  // }

  for (newMenuItem of menuItems) {
    const school = schools[Math.floor(Math.random() * schools.length)];
    school.menuItems.push(newMenuItem);
    await school.save();
  }

  for (newDailyMenu of dailyMenus) {
    const school = schools[Math.floor(Math.random() * schools.length)];
    const menuItem = school.menuItems[0];
    newDailyMenu.menuItems.push(menuItem);
    await newDailyMenu.save();
    school.menus.push(newDailyMenu);
    await school.save();
  }

  console.log('all done!');
  db.close();
});
