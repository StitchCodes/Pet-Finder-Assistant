const db = require('../config/connection');
const { User } = require('../models');

const userData = require('./usersData.json');
//const placadData = require('./placardData.json')

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  //await Placard.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  //const placards = await Placard.inserMany(placardData);

 // for (newPlacard of placards) {
    // randomly add each placard to a user
    // const tempUser = users[Math.floor(Math.random() * users.length)];
    // tempUser.placards.push(newPlacard._id);
    // await tempUser.save();

  //}

  console.log('all done!');
  process.exit(0);
});
