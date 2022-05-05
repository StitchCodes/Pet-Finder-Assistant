const { gql } = require('apollo-server-express');

const typeDefs = gql
`
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

type Pet {
    _id: ID
    petName: String
    petSpecies: String
    petGender: String
    petColor: String
    petDesc: String
    petDateLF: String
    petStatus: String
    petPhoto: String
    petReward: Int
}

type Placard {
    _id: ID
    placardText: String
    placardAuthor: String
    createdAt: String
    placardPet: Pet
    comments: [Comment]
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Query { 
    user(email: String!, password: String!): User
}
  
type Mutation {
    addUser(email: String!, nickname: String, name:String!, lastname:String, phone: String!, password: String!): User
    updateUser(nickname: String, name:String!, lastname:String, phone: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPlacard(placardText: String!): Placard
    removePlacard(PlacardId: ID!): Placard
    addComment(Placard: ID, commentText: String!): Placard
}
`;
module.exports = typeDefs;