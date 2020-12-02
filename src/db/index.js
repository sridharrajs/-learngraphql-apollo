const mongoose = require('mongoose');
const db = mongoose;

const { MONGO_CONNECTION_URL } = process.env;

const connectDb = () => new Promise((resolve, reject) => {
  db.connect(MONGO_CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  db.connection.once('open', () => {
    console.log('Connecting to database - ✅');
    return resolve();
  }).on('err', () => reject());
});

module.exports = { connectDb };
