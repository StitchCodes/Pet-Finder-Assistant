const db = require('../config/connection');
const { User, Pet, Placard } = require('../models');

const userData = require('./usersData.json');
const petData = require ('./petData.json');
const placardData = require('./placardData.json');
const commentData = require('./commentsData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Pet.deleteMany({});
  await Placard.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const pets = await Pet.insertMany(petData);
  const placard = await Placard.insertMany(placardData);

//  for (newPet of pets) {
//     // randomly add each placard to a user
//     const tempPlacard = placard[Math.floor(Math.random() * placard.length)];
//     tempPlacard.placardPet = newPet;
//     await tempPlacard.save();
//   }

  console.log('all done!');
  process.exit(0);
});
