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
