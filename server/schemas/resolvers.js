const { AuthenticationError } = require('apollo-server-express');
const { Pet, Post, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },

    Mutation: {
        addPlacard: async (parent, args, context) => {

        },
        removePlacard: async (parent, args, context) => {
            
        },
        addComment: async (parent, args, context) => {
            
        },
    },
}

module.exports = resolvers;