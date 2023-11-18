// Importing required modules and models
const db = require('../config/connection');
const { User, MenuItem, School, DailyMenu } = require('../models');
const cleanDB = require('./cleanDB');

// Importing seed data
const menuItemSeeds = require('./menuItemSeeds.json');
const userSeeds = require('./userSeeds.json');
const schoolSeeds = require('./schoolSeeds.json');
const dailyMenuSeeds = require('./dailyMenuSeeds.json');

// Event listener for when the database connection is open
db.once('open', async () => {
  // Cleaning the database tables using the cleanDB function
  await cleanDB('User', 'users');
  await cleanDB('School', 'schools');
  await cleanDB('MenuItem', 'menuitems');
  await cleanDB('DailyMenu', 'dailymenus');

  // Creating records in the respective collections using the seed data
  const schools = await School.create(schoolSeeds);
  const menuItems = await MenuItem.create(menuItemSeeds);
  const dailyMenus = await DailyMenu.create(dailyMenuSeeds);
  const users = await User.create(userSeeds);

  // Associating users with schools (commented out for now)
  // for (newUser of users) {
  //   const school = schools[Math.floor(Math.random() * schools.length)];
  //   school.users.push(newUser);
  //   await school.save();
  // }

  // Associating menu items with schools
  for (newMenuItem of menuItems) {
    // Randomly selecting a school from the list
    const school = schools[Math.floor(Math.random() * schools.length)];

    // Adding the current menu item to the selected school's menuItems array
    school.menuItems.push(newMenuItem);

    // Saving the school with the updated menuItems array
    await school.save();
  }

  // Associating daily menus with schools and menu items
  for (newDailyMenu of dailyMenus) {
    // Randomly selecting a school from the list
    const school = schools[Math.floor(Math.random() * schools.length)];

    // Selecting a random menu item from the school's menuItems array
    const randomIndex = Math.floor(Math.random() * school.menuItems.length);
    const menuItem = school.menuItems[randomIndex];

    // Adding the selected menu item to the daily menu's menuItems array
    newDailyMenu.menuItems.push(menuItem);

    // Saving the daily menu with the updated menuItems array
    await newDailyMenu.save();

    // Adding the daily menu to the school's menus array
    school.menus.push(newDailyMenu);

    // Saving the school with the updated menus array
    await school.save();
  }

  // Logging a message when the process is completed
  console.log('all done!');

  // Closing the database connection
  db.close();
});
