const typeDefs = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    createdAt: String
  }

  type MenuItem {
    _id: ID
    name: String!
    description: String!
    image: String
    category: Category
    createdAt: String
  }

  type DailyMenu {
    _id: ID
    date: String
    menuItems: [MenuItem]
    createdAt: String
  }

  type School {
    _id: ID
    name: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    phone: String!
    email: String!
    users: [User]
    menuItems: [MenuItem]
    menus: [DailyMenu]
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  enum Category {
    ENTREE
    SIDE
    DRINK
    SNACK
  }

  type Query {
    users: [User]
    schools: [School]
    schoolById(_id: ID!): School
    menuItems: [MenuItem]
    menus: [DailyMenu]
  }

  type Mutation {
    signupUser(
      firstName: String!,
      lastName: String!,
      email: String!,
      password: String!,
      school: ID!
    ): Auth
`;

module.exports = typeDefs;

/*
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, school: ID!): Auth
        addSchool(name: String!, address: String!, city: String!, state: String!, zip: String!, phone: String!, email: String!): School
        addMenuItem(name: String!, description: String!, price: Float!, school: ID!): MenuItem
        addWeeklyMenu(week: Int!, year: Int!, school: ID!): WeeklyMenu
        addMenuItemToWeeklyMenu(menuItem: ID!, weeklyMenu: ID!): WeeklyMenu
        removeMenuItemFromWeeklyMenu(menuItem: ID!, weeklyMenu: ID!): WeeklyMenu
        removeSchool(_id: ID!): School
        removeUser(_id: ID!): User
        removeMenuItem(_id: ID!): MenuItem
        removeWeeklyMenu(_id: ID!): WeeklyMenu
        updateSchool(_id: ID!, name: String, address: String, city: String, state: String, zip: String, phone: String, email: String): School
        updateUser(_id: ID!, firstName: String, lastName: String, email: String, password: String): User
    }

    me: User
    schools: [School]
    school(_id: ID!): School
    user(_id: ID!): User

*/
