// CREATE GRAPHQL USAGE
const { gql } = require('apollo-server-express');

// TODO: Create full model
const typeDefs = gql `
    type Category {
        _id: ID
        name: String
    }
    
    type pet {
        _id: ID
        petName: String
        petSpecies: String
        petGender: String
        petColor: String
        petDesc: String
        petDateLF: Date
        petStatus: Boolean
        petPhoto: String
        petReward: Number
        petComments: [Posts]
    }

    type Placard {
        _id: ID
        placardText: String
        placardAuthor: String
        createdAt: String
        placardPet: [ Pet ]
        location
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query { 
        User
        Placard
        Pet
    }

    type Mutation {
        createUser
        login(email: String!, password: String!): Auth
        addPlacard(placardText: String!): Placard
        removePlacard(PlacardId: ID!): Placard
        addComment(Placard: ID, commentText: String!): Placard
    }
    `;



module.export = typeDefs;