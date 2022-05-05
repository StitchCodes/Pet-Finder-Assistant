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
# Placard TYPEDEF
    type Placard {
        _id: ID
        placardAuthor: String
        createdAt: String
        placardPet: Pet
        comments: [Comment]
    }
# PET TYPEDEF
    type Pet {
        _id: ID
        petName: String
        petSpecies: String
        petGender: String
        petColor: String
        petDesc: String
        petDateLF: String
        petStatus: Boolean
        petPhoto: String
        petReward: Int
    }
# COMMENT TYPEDEF
    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        commentCreatedAt: String
    }
# AUTH TYPEDEF
    type Auth {
        token: ID!
        user: User
    }
# QUERY DEFINITIOM
    type Query { 
      
        user(email: String!, password: String!): User
        placards: [Placard]
        singlePlacard(placardId: ID): Placard
        pets: [Pet]
    }
# MUTATIONS DEFINITON
    type Mutation {
        addUser(email: String!, nickname: String, name:String!, lastname:String, phone: String!, password: String!): User
        updateUser(nickname: String, name:String!, lastname:String, phone: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPlacard(placardAuthor: String!, createdAt: String!, location: String!, petName: String!, petSpecies: String!, petGender: String!, petColor: String!, petDesc: String!, petDateLF: String!, petStatus: Boolean!, petPhoto: String!, petReward: Int!): Placard
        removePlacard(PlacardId: ID!): Placard
        addComment(Placard: ID, commentText: String!, commentAuthor: String!, commentCreatedAt: String!): Placard
    }
`;

module.exports = typeDefs;