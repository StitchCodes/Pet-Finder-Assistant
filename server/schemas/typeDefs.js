// CREATE GRAPHQL USAGE
const { gql } = require('apollo-server-express');

// TODO: Create full model
const typeDefs = gql `
    type Category {
        _id: ID
        name: String
    }
    
    type Pet {
        _id: ID
        petName: String
        petSpecies: String
        petGender: String
        petColor: String
        petDesc: String
        petDateLF: Date
        petStatus: Boolean
        petLocation: String
        petPhoto: String
        petReward: Number
        petComments: [Posts]
    }

    type Posts {
        _id: ID
        postText: String
        postAuthor: String
        createdAt: String
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
        
    }

    type Mutation {
        createUser
        login
        addPost
        removePost
        addComment
    }
    `;



module.export = typeDefs;