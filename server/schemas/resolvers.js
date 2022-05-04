const { AuthenticationError } = require('apollo-server-express');
const { Placard, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },

    Mutation: {
        addPlacard: async (parent, { placardAuthor, Pet }, context) => {
            if(context.user) {
                const placard = await Placard.create({ 
                    Pet,
                    placardAuthor: context.user.nickname,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { placards: placard._id }}
                );

                return placards;
            }

            throw new AuthenticationError('You need to be logged in');
        },
        removePlacard: async (parent, { placardId }, context) => {
            if (context.user) {
                const placard = await Placard.findeOneAndDelete({
                    _id: placardId,
                    placardAuthor: context.user.nickname,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { placards: placard._id }}
                );

                return placards;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, args, context) => {
            
        },
    },
}

module.exports = resolvers;