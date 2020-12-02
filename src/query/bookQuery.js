const { GraphQLID } = require('graphql');

const { Book } = require('../models');
const { BookType } = require('../types');

const bookQuery = {
  name: 'bookQuery',
  type: BookType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parent, args) {
    return Book.findById(args.id);
  }
};

module.exports = bookQuery;
