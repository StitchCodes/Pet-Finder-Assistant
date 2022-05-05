import { gql } from '@apollo/client';

export const ADD_PLACARD = gql `
    mutation addPlacard($placardAuthor: String!, $createdAt: Date!, $location: String!, $petName: String!, $petSpecies: String!, $petGender: String!, $petColor: String!, $petDesc: String!, $petDateLF: Date!, $petStatus: Boolean!, $petPhoto: String, $petReward: Number) {
        addPlacard(placardAuthor: $placardAuthor, createdAt: $createdAt, location: $location, petName: $petName, petSpecies: $petSpecies, petGender: $petGender, petColor: $petColor, petDesc: $petDesc, petDateLF: $petDateLF, petStatus: $petStatus, petPhoto: $petPhoto, petReward: $petReward) {
            _id
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
            petPhoto
            petReward
        }
    }
`;