const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const petSchema = new Schema({

});



const Pet = model('Pet', petSchema);

module.exports = Pet;