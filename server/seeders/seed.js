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

  // Associating users with schools
  for (newUser of users) {
    // Randomly selecting a school from the list
    const school = schools[Math.floor(Math.random() * schools.length)];

    // Adding the new user to the selected school's 'users' array
    school.users.push(newUser);

    // Saving the school with the updated 'users' array
    await school.save();
  }

  // Associating menu items with schools
  for (newMenuItem of menuItems) {
    // Randomly selecting a school from the list
    const school = schools[Math.floor(Math.random() * schools.length)];

    newMenuItem.school = school;
    await newMenuItem.save();

    // Adding the current menu item to the selected school's menuItems array
    school.menuItems.push(newMenuItem);

    // Saving the school with the updated menuItems array
    await school.save();
  }

  // Associating daily menus with schools and menu items
  for (newDailyMenu of dailyMenus) {
    console.log('Processing newDailyMenu:', newDailyMenu);

    // Ensure that newDailyMenu.meals is an array with items property
    if (!newDailyMenu.meals || !Array.isArray(newDailyMenu.meals)) {
      console.error('Error: meals property is not properly defined.');
      continue; // Skip to the next iteration if there's an issue
    }

    // Ensure that each meal in newDailyMenu.meals has a type property
    for (const meal of newDailyMenu.meals) {
      if (!meal.type) {
        console.error('Error: Meal does not have a type property.');
        continue; // Skip to the next iteration if there's an issue
      }
    }

    // Randomly selecting a school from the list
    const school = schools[Math.floor(Math.random() * schools.length)];

    // Selecting a random menu item for each meal type
    const entree = menuItems.find((item) => item.category === 'ENTREE');
    const side = menuItems.find((item) => item.category === 'SIDE');
    const snack = menuItems.find((item) => item.category === 'SNACK');
    const drink = menuItems.find((item) => item.category === 'DRINK');

    newDailyMenu.school = school;

    // Adding the selected menu items to the daily menu's meals array
    newDailyMenu.meals
      .find((meal) => meal.type === 'BREAKFAST')
      .items.push(entree, drink);
    newDailyMenu.meals
      .find((meal) => meal.type === 'LUNCH')
      .items.push(entree, side, drink);
    newDailyMenu.meals.find((meal) => meal.type === 'SNACK').items.push(snack);

    // Saving the daily menu with the updated menuItems array
    await newDailyMenu.save();

    // Adding the daily menu to the school's menus array
    school.dailyMenus.push(newDailyMenu);

    // Saving the school with the updated menus array
    await school.save();
  }

  // Logging a message when the process is completed
  console.log('all done!');

  // Closing the database connection
  db.close();
});
