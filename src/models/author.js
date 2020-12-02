const { model, Schema } = require( 'mongoose');

const Author = new Schema({
  name: String,
  age: Number
});

module.exports = model('Author', Author);
