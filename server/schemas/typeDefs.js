// CREATE GRAPHQL USAGE
const { gql } = require('apollo-server-express');

// TODO: Create full model
const typeDefs = gql `
    type Category {
        _id: ID
        name: String
    }
    
    type Query { 
        categories: [Category]
    }

    type Mutation {
        addPost
        removePost
        createUser
        login
    }
    `;



module.export = typeDefs;