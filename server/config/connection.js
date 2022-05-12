// Create mongoose connection
const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/pet-finder-assistant',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
