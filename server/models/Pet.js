const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// PetSchema Model Definition
const petSchema = new Schema({
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
    petLocation: {
        type: String,
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
    petComments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comments",
        },
    ],
});


const Pet = model('Pet', petSchema);

module.exports = Pet;