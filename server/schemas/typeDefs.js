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
    meal: MealType
    menuItems: [MenuItem]
    school: School
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
    dailyMenus: [DailyMenu]
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

  enum MealType {
    BREAKFAST
    SNACK
    LUNCH
  }

  type Query {
    users: [User]
    schools: [School]
    schoolById(_id: ID!): School
    menuItems: [MenuItem]
    dailyMenus: [DailyMenu]
    dailyMenusByDate(schoolId: ID!, date: String!): [DailyMenu]
  }
  
  type Mutation {
    signupUser(
      firstName: String!,
      lastName: String!,
      email: String!,
      password: String!,
      school: ID!
    ): Auth
    loginUser(email: String!, password: String!): Auth
    updateUser(
      userId: ID!,
      firstName: String,
      lastName: String,
      email: String,
      password: String
    ): User
    addDailyMenu(date: String!, meal: MealType!, menuItems: [ID]!): DailyMenu
  }
`;

module.exports = typeDefs;
