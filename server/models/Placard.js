const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// Placard Model Definition
const placardSchema = new Schema({
    placardAuthor: {
        type: String,
        required: false,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    location: {
        type: String,
        required: false,
    },
    placardPet: {
        petName: {
            type: String,
            required: true,
            trim: true,
          },
          petSpecies: {
            type: String,
            required: false,
          },
          petGender: {
            type: String,
            required: false,
          },
          petColor: {
            type: String,
            required: false,
          },
          petDesc: {
            type: String,
            required: false,
          },
          petDateLf: {
            type: Date,
            required: false,
            get: (timestamp) => dateFormat(timestamp),
          },
          petStatus: {
            type: Boolean,
            required: false,
          },
          petPhoto: {
            type: String,
            required: false,
          },
          petReward: {
            type: Number,
            required: false,
          }
    },
    comments:[
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            commentCreatedAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            }
        }
    ]
});

const Placard = model('Placard', placardSchema);

module.exports = Placard;