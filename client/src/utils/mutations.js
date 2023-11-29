import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation signupUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $school: ID!
  ) {
    signupUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      school: $school
    ) {
      token
      user {
        password
        email
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_DAILY_MENU = gql`
  mutation addDailyMenu($date: String!, $meal: MealType!, $menuItems: [ID]!) {
    addDailyMenu(date: $date, meal: $meal, menuItems: $menuItems) {
      _id
      date
      meal
      menuItems {
        _id
        name
        description
        category
      }
    }
  }
`;

export const CREATE_SCHOOL_DAILY_MENU = gql`
  mutation createSchoolDailyMenu($input: CreateSchoolDailyMenuInput!) {
    createSchoolDailyMenu(input: $input) {
      _id
      date
      meal
      menuItems {
        _id
      }
      school {
        _id
      }
    }
  }
`;

export const ADD_MENU_ITEM = gql`
  mutation AddMenuItem(
    $name: String!
    $description: String!
    $category: String!
  ) {
    addMenuItem(name: $name, description: $description, category: $category) {
      _id
      name
      description
      category
    }
  }
`;
