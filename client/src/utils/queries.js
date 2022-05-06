import { gql } from '@apollo/client';

//  placards query
// query single card
//  query de users

export const QUERY_PLACARDS = gql`
    query getPlacards {
        placards {
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