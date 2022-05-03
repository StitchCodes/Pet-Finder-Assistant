const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const petSchema = new Schema({
    // ID
    // NAME
    // SPECIES
    // GENDER
    // COLOR
    // DESCRIPTION
    // DATE LOST/FOUND
    // STATUS
    // LOCATION
    // PHOTO(OPTIONAL)
    // REWARD(OPTIONAL)
    // COMMENTS 
});



const Pet = model('Pet', petSchema);

module.exports = Pet;