// Create mongoose connection
const mongoose = require("mongoose");

// mongodb+srv://atlasUser:atlasSecPwd@cluster0.l2m6z.mongodb.net/pawtrollerDB?retryWrites=true&w=majority
// mongodb://localhost:27017/pet-finder-assistant
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://atlasUser:atlasSecPwd@cluster0.l2m6z.mongodb.net/pawtrollerDB?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
