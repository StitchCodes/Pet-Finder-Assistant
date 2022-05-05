const { AuthenticationError } = require('apollo-server-express');
const { Placard, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Query all placards
        placards: async (parent, { email }) => {
            const params = email ? { email } : {};
            return Placard.find(params).sort({ createdAt: -1 });
        },
        // Query single placard
        singlePlacard: async (parent, { placardId }) => {
            return Placard.findOne({ _id: placardId });
        }
        user: async (parent, { email, password }) => {
            return User.findOne({ email, password }).populate('placards');
          },
    },

    Mutation: {
        // Create new placard
        addPlacard: async(parent, { placardAuthor, createdAt, location, petName, petSpecies, petGender, petColor, petDesc, petDateLF, petStatus, petPhoto, petReward }, context) => {
            if(context.user) {
                const placard = await Placard.create({
                    placardAuthor: context.user.placardAuthor._id,
                    createdAt,
                    location,
                    petName,
                    petSpecies,
                    petGender,
                    petColor,
                    petDesc,
                    petDateLF,
                    petStatus,
                    petPhoto,
                    petReward                    
                });

                await User.findOneAndUpdate(
                    { _id: placardAuthor._id },
                    { $addToSet: { placards: placard._id }}
                );

                return placard;
            }
            throw new AuthenticationError('Please login to add a new placard!');
        },
        // Delete Placard
        removePlacard: async (parent, { placardId }, context) => {
            if (context.user) {
                const placard = await Placard.findeOneAndDelete({
                    _id: placardId,
                    placardAuthor: context.user.placardAuthor._id,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { placards: placard._id }}
                );

                return placard;
            }

            throw new AuthenticationError('You need to be logged in to delete!');
        },
        // Create comment to placard
        addComment: async (parent, args, context) => {
            
        },
    },
}

module.exports = resolvers;