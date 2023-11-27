import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser {
    users {
      _id
      firstName
      lastName
      email
      password
      createdAt
    }
  }
`;

export const GET_SCHOOL_NAMES = gql`
  query getSchools {
    schools {
      _id
      name
    }
  }
`;

export const GET_SCHOOL = gql`
  query getSchools {
    schools {
      _id
      name
      address
      city
      state
      zip
      phone
      email
      users {
        _id
        firstName
        lastName
        email
        password
        createdAt
      }
      menuItems {
        _id
        name
        description
        image
        category
        createdAt
      }
      dailyMenus {
        _id
        date
        meal
        menuItems {
          _id
          name
          description
          image
          category
          createdAt
        }
        school {
          _id
          address
          city
          createdAt
          email
          name
          phone
          state
          zip
          users {
            _id
            firstName
            lastName
            email
            password
            createdAt
          }
        }
        createdAt
      }
      createdAt
    }
  }
`;

export const GET_SCHOOL_BY_ID = gql`
  query schoolById($id: ID!) {
    schoolById(_id: $id) {
      _id
      name
      address
      city
      state
      zip
      phone
      email
      users {
        _id
        firstName
        lastName
        email
        password
        createdAt
      }
      menuItems {
        _id
        name
        description
        image
        category
        createdAt
      }
      dailyMenus {
        menuItems {
          _id
          name
          description
          image
          category
          createdAt
        }
        _id
        createdAt
        date
        meal
      }
      createdAt
    }
  }
`;

export const GET_DAILY_MENUS_BY_SCHOOL = gql`
  query dailyMenusBySchool($schoolId: ID!) {
    dailyMenusBySchool(schoolId: $schoolId) {
      _id
      date
      meal
      menuItems {
        _id
        name
        description
        category
      }
      school {
        _id
        name
      }
    }
  }
`;

export const GET_MENU_ITEMS = gql`
  query getMenuItems {
    menuItems {
      _id
      name
      description
      image
      category
      createdAt
    }
  }
`;

export const GET_MENU_ITEMS_BY_SCHOOL_ID = gql`
  query Schools($id: ID!) {
    schoolById(_id: $id) {
      _id
      name
      menuItems {
        _id
        name
        category
      }
    }
  }
`;

export const GET_DAILY_MENUS = gql`
  query getDailyMenus {
    dailyMenus {
      _id
      date
      meal
      menuItems {
        _id
        name
        description
        image
        category
        createdAt
      }
      createdAt
    }
  }
`;

export const GET_DAILY_MENUS_BY_SCHOOL_DATE = gql`
  query DailyMenusBySchoolAndDate($schoolId: ID!, $date: DateTime!) {
    dailyMenusBySchoolAndDate(schoolId: $schoolId, date: $date) {
      _id
      date
      meal
      menuItems {
        name
        category
        _id
      }
    }
  }
`;

export const GET_DAILY_MENUS_BY_SCHOOL_DATE_MEAL = gql`
  query DailyMenusBySchoolDateAndMeal(
    $schoolId: ID!
    $date: DateTime!
    $meal: MealType!
  ) {
    dailyMenusBySchoolDateAndMeal(
      schoolId: $schoolId
      date: $date
      meal: $meal
    ) {
      _id
      date
      meal
    }
  }
`;
