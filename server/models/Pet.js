// const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

// const petSchema = Schema({
//   petName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   petSpecies: {
//     type: String,
//     required: true,
//   },
//   petGender: {
//     type: String,
//     required: true,
//   },
//   petColor: {
//     type: String,
//     required: true,
//   },
//   petDesc: {
//     type: String,
//     required: true,
//   },
//   petDateLf: {
//     type: Date,
//     required: true,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   petStatus: {
//     type: Boolean,
//     required: true,
//   },
//   petPhoto: {
//     type: String,
//     required: true,
//   },
//   petReward: {
//     type: Number,
//     required: false,
//   },
//   placard: {
//     type: Schema.Types.ObjectId,
//     ref: "Placard",
//   },
// });

// const Pet = model("Pet", petSchema);

// module.exports = Pet;
