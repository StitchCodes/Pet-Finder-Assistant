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

export const ADDPLACARD = gql `
    mutation addPlacard($location: String!, $petName: String!, $petSpecies: String!, $petGender: String!, $petColor: String!, $petDesc: String!, $petDateLf: String!, $petStatus: Boolean!, $petPhoto: String, $petReward: Int) {
  addPlacard(location: $location, petName: $petName, petSpecies: $petSpecies, petGender: $petGender, petColor: $petColor, petDesc: $petDesc, petDateLf: $petDateLf, petStatus: $petStatus, petPhoto: $petPhoto, petReward: $petReward) {
    _id
    createdAt
    location
    placardPet {
      petName
      petSpecies
      petGender
      petColor
      petDesc
      petDateLf
      petStatus
      petPhoto
      petReward
    }
  }
}
`;