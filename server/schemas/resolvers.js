const { User, MenuItem, School } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find().sort({ createdAt: -1 }).populate('school');
        },

        schools: async () => {
            return await School.find().sort({ createdAt: -1 });
            // return await School.find().sort({ createdAt: -1 }).populate('users').populate('menuItems').populate('weeklyMenus');
        },

        menuItems: async () => {
            return await MenuItem.find().sort({ createdAt: -1 });
            // return await MenuItem.find().sort({ createdAt: -1 }).populate('school');
        },

        menus: async () => {
            return await DailyMenu.find().sort({ createdAt: -1 });
        }
    }
}

module.exports = resolvers;
