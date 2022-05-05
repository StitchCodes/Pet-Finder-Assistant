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
        required: true,
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