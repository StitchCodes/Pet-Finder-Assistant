const { AuthenticationError } = require('apollo-server-express');
const { Placard, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },

    Mutation: {
        addPlacard: async (parent, { placardText }, context) => {
            if(context.user) {
                const placard = await Placard.create({
                    placardText, 
                    Pet,
                    placardAuthor: context.user.nickname
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { placard: placard._id }}
                );

                return placard;
            }

            throw new AuthenticationError('You need to be logged in');
        },
        removePlacard: async (parent, args, context) => {
            
        },
        addComment: async (parent, args, context) => {
            
        },
    },
}

module.exports = resolvers;