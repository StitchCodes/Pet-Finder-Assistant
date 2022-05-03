const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    // ID*
    // EMAIL
    // NAME
    // LAST NAME
    // PHONE #
    // PASSWORD
});



const User = model('User', userSchema);

module.exports = User;