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

export const GET_SCHOOL = gql`
  query getSchool {
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
        createdAt
      }
      createdAt
    }
  }
`;

export const GET_SCHOOL_BY_ID = gql`
  query getSchoolById($id: ID!) {
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
      createdAt
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
