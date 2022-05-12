const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
}

type Pet {
    _id: ID
    petName: String
    petSpecies: String
    petGender: String
    petColor: String
    petDesc: String
    petDateLf: String
    petStatus: String
    petPhoto: String
    petReward: Int
}

type Placard {
    _id: ID
    placardAuthor: String
    createdAt: String
    location: String
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
    allUsers: [User]
    placards: [Placard]
    singlePlacard(placardId: ID): Placard
    pets: [Pet]
}
  
type Mutation {
    addUser(email: String!, nickname: String, name:String!, lastname:String!, phone: String, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPlacard(location: String!, petName: String!, petSpecies: String!, petGender: String!, petColor: String!, petDesc: String!, petDateLf: String!, petStatus: Boolean!, petPhoto: String, petReward: Int): Placard
    addComment(Placard: ID, commentText: String!, commentAuthor: String!, commentCreatedAt: String!): Placard
}
`;
module.exports = typeDefs;