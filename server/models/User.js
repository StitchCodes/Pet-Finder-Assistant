const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  nickname: {
    type: String,
    require: false,
    unique: false,
  },
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  phone: {
    type: String,
    required: false,
    unique: false,
    match: [/[0-9]/, "Only numbers!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
