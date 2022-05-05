const { Schema, model } = require('mongoose');

const petSchema = Schema({
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
    }
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
    