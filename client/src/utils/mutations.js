import { gql } from '@apollo/client';

// Add New User
export const NEWUSER = gql `
    mutation AddUser($email: String!, $name: String!, $lastname: String!, $password: String!, $phone: String) {
        addUser(email: $email, name: $name, lastname: $lastname, password: $password, phone: $phone) {
            token
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

// Add Placard
export const ADDPLACARD = gql `
    mutation addPlacard(
        $placardAuthor: ID!, 
        $createdAt: String, 
        $location: String, 
        $petName: String, 
        $petSpecies: String, 
        $petGender: String, 
        $petColor: String, 
        $petDesc: String, 
        $petDateLF: String, 
        $petStatus: String, 
        $petPhoto:String, 
        $petReward: String) {
            addPlacard(
                placardAuthor:  $placardAuthor
                createdAt: $createdAt
                location: $location
                petName: $petName
                petSpecies: $petName
                petGender: $petGender
                petColor: $petColor 
                petDesc: $petDesc
                petDateLF: $petDateLF
                petStatus: $petStatus 
                petPhoto: $petPhoto
                petReward: $petReward) {
                    placardAuthor
                    createdAt
                    location
                    petName
                    petSpecies
                    petGender
                    petColor 
                    petDesc
                    petDateLF
                    petStatus
                    petReward
                }

    }
`