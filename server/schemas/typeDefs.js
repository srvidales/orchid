const typeDefs = `

  scalar DateTime

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
    date: DateTime
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
    dailyMenusBySchoolAndDate(schoolId: ID!, date: DateTime!): [DailyMenu]
    dailyMenusBySchoolDateAndMeal(schoolId: ID!, date: DateTime!, meal: MealType!): [DailyMenu]
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

/*
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, school: ID!): Auth
        addDailyMenu(): DailyMenu
        WishList - addMenuItem(name: String!, description: String!, price: Float!, school: ID!): MenuItem
        WishList - addSchool(name: String!, address: String!, city: String!, state: String!, zip: String!, phone: String!, email: String!): School
        WishList - removeSchool(_id: ID!): School
        WishList - removeUser(_id: ID!): User
        WishList - removeMenuItem(_id: ID!): MenuItem
        WishList - updateSchool(_id: ID!, name: String, address: String, city: String, state: String, zip: String, phone: String, email: String): School
        WishList - updateUser(_id: ID!, firstName: String, lastName: String, email: String, password: String): User
    }

    me: User
    schools: [School]
    school(_id: ID!): School
    user(_id: ID!): User

*/
