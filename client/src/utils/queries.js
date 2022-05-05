import { gql } from '@apollo/client';

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