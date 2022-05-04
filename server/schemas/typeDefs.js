// CREATE GRAPHQL USAGE
const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        email: String
        nickname: String
        name: String
        lastname: String
        phone: String
        password: String
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
        user(email: String!, password: String!): User
    }
      
    type Mutation {
        addUser(email: String!, nickname: String, name:String!, lastname:String, phone: String!, password: String!): Auth
        updateUser(nickname: String, name:String!, lastname:String, phone: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPlacard(placardText: String!): Placard
        removePlacard(PlacardId: ID!): Placard
        addComment(Placard: ID, commentText: String!): Placard
    }
    `;



module.export = typeDefs;