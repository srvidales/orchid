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
    school: School
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
    menuItemsBySchool(schoolId: ID!): [MenuItem]    
    dailyMenus: [DailyMenu]
    dailyMenusBySchool(schoolId: ID!): [DailyMenu]
    dailyMenusBySchoolAndDate(schoolId: ID!, date: String!): [DailyMenu]
    dailyMenusBySchoolDateAndMeal(schoolId: ID!, date: String!, meal: MealType!): [DailyMenu]
  }

  input CreateSchoolDailyMenuInput {
    schoolId: ID!
    date: String
    meal: MealType
    menuItems: [ID]
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
    deleteUser(userId: ID!, schoolId: ID!): String
    addSchool(
      name: String!
      address: String!
      city: String!
      state: String!
      zip: String!
      phone: String!
      email: String!
    ): School
    updateSchool(
      schoolId: ID!
      name: String
      address: String
      city: String
      state: String
      zip: String
      phone: String
      email: String
    ): School
    deleteSchool(schoolId: ID!): String
    addDailyMenu(
      school: String!
      date: String!
      meal: MealType!
      menuItems: [ID]!
    ): DailyMenu  
    updateDailyMenu(
      dailyMenuId: ID!
      date: String
      meal: MealType
      menuItems: [ID]
    ): DailyMenu
    deleteDailyMenu(dailyMenuId: ID!): String
    addMenuItem(
      name: String!, 
      description: String!,  
      category: String!
    ): MenuItem
    updateMenuItem(
      itemId: ID!, 
      name: String, 
      description: String, 
      category: String
    ): MenuItem
    deleteMenuItem(itemId: ID!): String
    createSchoolDailyMenu(input: CreateSchoolDailyMenuInput!): DailyMenu
  }
`;

module.exports = typeDefs;
