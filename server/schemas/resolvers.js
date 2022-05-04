const { AuthenticationError } = require('apollo-server-express');
const { Pet, Placard, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },

    Mutation: {
        addPlacard: async (parent, { placardText }, context) => {
            if(context.user) {
                const placard = await Placard.create({
                    placardText,
                    placardAuthor: context.user.username
                })
            }
        },
        removePlacard: async (parent, args, context) => {
            
        },
        addComment: async (parent, args, context) => {
            
        },
    },
}

module.exports = resolvers;