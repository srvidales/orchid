const db = require('../config/connection');
const { User, MenuItem, School, DailyMenu } = require('../models');
const menuItemSeeds = require('./menuItemSeeds.json');
const userSeeds = require('./userSeeds.json');
const schoolSeeds = require('./schoolSeeds.json');
const dailyMenuSeeds = require('./dailyMenuSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('School', 'schools');
  await cleanDB('MenuItem', 'menuItems');
  await cleanDB('DailyMenu', 'dailyMenus');

  await MenuItem.create(menuItemSeeds);
  await User.create(userSeeds);

  // Make a list to quickly find schools by their names.
  const schoolMap = new Map();
  // For each school in the list of school data:
  for (const schoolData of schoolSeeds) {
    // Create a school object in the database and remember it.
    const school = await School.create(schoolData);
    // Save the school into the list using its name as a key.
    schoolMap.set(schoolData.name, school);
  }

  // Make a list to quickly find menu items by their names.
  const menuItemMap = new Map();
  // For each menu item in the list of menu item data:
  for (const menuItemData of menuItemSeeds) {
    // Create  a menu item object in the database and remember it.
    const menuItem = await MenuItem.create(menuItemData);
    // Save the menu item into the list using its name as a key.
    menuItemMap.set(menuItemData.name, menuItem);
  }

  // For each daily menu in the list of daily menu data:
  for (const dailyMenuData of dailyMenuSeeds.dailyMenus) {
    // Find the school associated with this daily menu from our school list.
    const schoolName = dailyMenuData.school;
    const school = schoolMap.get(schoolName);

    // If the school isn't found, print an error and move to the next daily menu.
    if (!school) {
      console.error(`School not found for daily menu: ${schoolName}`);
      continue;
    }

    // Convert the menu item data into menu item objects and filter out any that couldn't be found.
    const menuItems = dailyMenuData.menuItems.map((menuItemData) => {
      const menuItemName = menuItemData.name;
      const menuItem = menuItemMap.get(menuItemName);

      // If the menu item isn't found, print an error and skip it.
      if (!menuItem) {
        console.error(`Menu item not found for daily menu: ${menuItemName}`);
        return null;
      }

      // Add a category property to the menu item and return the modified object.
      return {
        ...menuItem.toObject(),
        category: menuItemData.category,
      };
    });

    // Create a daily menu entry in the database with the processed menu items.
    await DailyMenu.create({
      date: dailyMenuData.date,
      menuItems: menuItems.filter(Boolean), // Remove any menu items that couldn't be found.
      school: school,
    });
  }

  console.log('all done!');
  db.close();
});
