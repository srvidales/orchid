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
  query schools {
    schools {
      _id
      name
    }
  }
`;

export const GET_DAILY_MENUS_BY_SCHOOL = gql`
  query dailyMenusBySchool($schoolId: ID!) {
    dailyMenusBySchool(schoolId: $schoolId) {
      _id
      name
      dailyMenus {
        _id
        date
        meal
        menuItems {
          _id
          category
          description
          name
        }
      }
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

