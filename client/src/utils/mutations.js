import { gql } from '@apollo/client';

// Add New User
export const NEWUSER = gql `
    mutation AddUser($email: String!, $name: String!, $lastname: String!, $password: String!, $phone: String) {
        addUser(email: $email, name: $name, lastname: $lastname, password: $password, phone: $phone) {
            token
            user {
            _id
            email
            name
            lastname
            phone
            }
        }
    }
`;

// User login Mutation
export const LOGIN = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        }
    }
`;

// Add Comment