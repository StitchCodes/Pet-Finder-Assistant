const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// Placard Model Definition
const placardSchema = new Schema({
    placardAuthor: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    location: {
        type: String,
        required: true,
    },
    placardPet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
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