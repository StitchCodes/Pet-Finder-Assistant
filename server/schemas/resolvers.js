const { AuthenticationError } = require('apollo-server-express');
const { Placard, User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Query all placards
        placards: async (parent) => {
            return Placard.find({}).populate('placardPet').sort({ createdAt: -1 });
        },
        // Query single placard
        singlePlacard: async (parent, { placardId }) => {
            return Placard.findOne({ _id: placardId }).populate('placardPet');
        },
        // Query User for login
        user: async (parent, { email, password }) => {
            return User.findOne({ email, password });
          },
        // Query ALL Users
        allUsers: async (parent) => {
            return User.find({})
        },
        pets: async (parent) => {
            return Pet.find()
        }
    },

    Mutation: {
        // Authenticate a user and create jwt token
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Data enter does not match with an active user');
            }

            const correctPwd = await user.isCorrectPassword(password);
            if (!correctPwd) {
                throw new AuthenticationError('Data enter does not match with an active user');
            }

            const token = signToken(user);
            return {token}
        },

        // Create new user (sing up) and create jwt token
        addUser: async (parent, { email, nickname, name, lastname, phone, password }, context) => {
            const user = await User.create({email, nickname, name, lastname, phone, password});
            console.log (user);
            const token = signToken(user);
            return {token}
        },
        
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
        // Create comment to placard
        addComment: async (parent, { placardId, commentText, commentAuthor, commentCreatedAt}, context) => {
            return Placard.findOneAndUpdate(
                { _id: placardId },
                { $addToSet: { comments: { commentText, commentAuthor, commentCreatedAt}}},
                { new: true, runValidators: true }
            );
        },

    },
}

module.exports = resolvers;