const { GraphQLID, GraphQLNonNull, GraphQLString } = require('graphql');

const { Book } = require('../models');
const { BookType } = require('../types');

const addBook = {
  type: BookType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    genre: {
      type: new GraphQLNonNull(GraphQLString)
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(parent, args) {
    const book = new Book({
      name: args.name,
      genre: args.genre,
      authorId: args.authorId
    });
    return book.save();
  }
};

module.exports = addBook;
