// CREATE GRAPHQL USAGE
const { gql } = require('apollo-server-express');

// TODO: Create full model
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
    }
    `;



module.export = typeDefs;