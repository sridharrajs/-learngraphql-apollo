const { GraphQLList } = require('graphql');

const { Book } = require('../models');
const { BookType } = require('../types');

const booksQuery = {
  type: new GraphQLList(BookType),
  resolve(parent, args) {
    return Book.find({});
  }
};

module.exports = booksQuery;
