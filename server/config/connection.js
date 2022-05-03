// Create mongoose connection
const mongoose = require('mongoose');

goose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pet-finder-assistant',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;