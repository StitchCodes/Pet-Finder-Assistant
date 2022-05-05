const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
    nickname: {
        type: String,
        require: false,
        unique: true,
        trim: true,
    },   
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    lastname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: [/[0-9]/, 'Only numbers!'],
      },
    password: {
    type: String,
    required: false,
    minlength: 5,
    },
});


// userSchema.pre('save', async function (next) {
//    if (this.isNew || this.isModified('password')) {
//      const saltRounds = 10;
//      this.password = await bcrypt.hash(this.password, saltRounds);
//    }
//    next();
//  });
  
//  userSchema.methods.isCorrectPassword = async function (password) {
//    return bcrypt.compare(password, this.password);
//  };
  
  const User = model('User', userSchema);
  
  module.exports = User;
  