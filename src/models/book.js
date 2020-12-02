const { model, Schema } = require( 'mongoose');

const Book = new Schema({
  name: String,
  genre: String,
  authorId: { type: Schema.Types.ObjectId }
});

module.exports =  model('Book', Book);
