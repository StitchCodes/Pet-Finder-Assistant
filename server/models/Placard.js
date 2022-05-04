const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// Placard Model Definition
const placardSchema = new Schema({
    placardAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
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
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
    pet: [
        {
            petName: {
                type: String,
                required: true,
                trim: true,
            },
            petSpecies: {
                type: String,
                required: true,
            },
            petGender: {
                type: String,
                required: true,
            },
            petColor: {
                type: String,
                required: true,
            },
            petDesc: {
                type: String,
                required: true,
            },
            petDateLF: {
                type: Date,
                required: true,
            },
            petStatus: {
                type: Boolean,
                required: true,
            },
            petPhoto: {
                type: String,
                required: true,
            },
            petReward: {
                type: Number,
                required: false
            },
        },
    ],
    location: {
        type: String,
        required: true,
    },
});

const Placard = model('Placard', placardSchema);

module.exports = Placard;