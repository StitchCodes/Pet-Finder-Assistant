const { gql } = require('apollo-server-express');

const typeDefs = gql `
# USER TYPEDEF
    type User {
        _id: ID
        email: String
        nickname: String
        name: String
        lastname: String
        phone: String
        password: String
  }
# PET TYPEDEF
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
        petReward: Int
    }
# COMMENT TYPEDEF
    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }
# AUTH TYPEDEF
    type Auth {
        token: ID!
        user: User
    }
# QUERY DEFINITIOM
    type Query { 
        user(email: String!, password: String!): User
    }
# MUTATIONS DEFINITON
    type Mutation {
        addUser(email: String!, nickname: String, name:String!, lastname:String, phone: String!, password: String!): Auth
        updateUser(nickname: String, name:String!, lastname:String, phone: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPlacard(placardAuthor: String!, createdAt: Date!, location: String!, petName: String!, petSpecies: String!, petGender: String!, petColor: String!, petDesc: String!, petDateLF: Date!, petStatus: Boolean!, petPhoto: String!, petReward: Int!): Placard
        removePlacard(PlacardId: ID!): Placard
        addComment(Placard: ID, commentText: String!, commentAuthor: String!, createdAt: Date!): Placard
    }
`;

module.exports = typeDefs;