import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
    mutation signupUser($email: String!, $password: String!) {
        signupUser(email: $email, password: $password) {
            firstName
            lastName
            email
            password
        }
    }
`;

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                email
                password
            }
        }
    }
`;
