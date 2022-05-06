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
  const placards = await Placard.insertMany(placardData);

  for (newPet of pets) {
    // randomly add each placard to a user
    const tempPlacard = placards[Math.floor(Math.random() * placards.length)];
    tempPlacard.placardPet = newPet;
    await tempPlacard.save();
  }

  // for (newComment of pets) {
  //   // randomly add each placard to a user
  //   const tempPlacard = placards[Math.floor(Math.random() * placards.length)];
  //   tempPlacard.placardPet = newPet;
  //   console.log(tempPlacard.placardPet);
  //   await tempPlacard.save();
  // }

//  for (newPlacard of placards) {
//     // randomly add each placard to a user
//     const tempUser = users[Math.floor(Math.random() * users.length)];
//     tempUser.placards.push(newPlacard._id);
//     await tempUser.save();
//   }

  console.log('all done!');
  process.exit(0);
});
