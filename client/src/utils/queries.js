import { gql } from '@apollo/client';

// Query ALL Placards Query
export const ALL_PLACARDS_QUERY = gql`
    query Placards {
        placards {
            _id
            placardAuthor
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
            comments {
            _id
            commentText
            commentAuthor
            createdAt
            }
        }
}
`;

// Query SINGLE placard
export const SINGLE_PLACARD_QUERY = gql `
    query SinglePlacard($placardId: ID) {
        singlePlacard(placardId: $placardId) {
            _id
            placardAuthor
            createdAt
            location
            comments {
            _id
            commentText
            commentAuthor
            createdAt
            }
            placardPet {
            _id
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

// Query ALL Users
export const ALL_USERS_QUERY = gql  `
    query AllUsers {
        allUsers {
            _id
            email
            phone
            lastname
            name
            nickname
        }
}
`;

// Query Users for SIGNUP
export const USER_SIGNUP = gql `
query User($email: String!, $password: String!) {
    user(email: $email, password: $password) {
        email
        nickname
        name
        lastname
        phone
    }
}
`;