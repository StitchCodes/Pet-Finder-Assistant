const { AuthenticationError } = require('apollo-server-express');
const { Placard, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { email, password }) => {
            return User.findOne({ email, password });
          },
    },

    Mutation: {

        addUser: async (parent, { email, nickname, name, lastname, phone, password }, context) => {
            return User.create({email, nickname, name, lastname, phone, password});
        }
    },
}

module.exports = resolvers;