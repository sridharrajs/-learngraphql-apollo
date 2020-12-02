const { GraphQLObjectType } = require('graphql');

const bookQuery = require('./bookQuery');
const booksQuery = require('./booksQuery');
const authorQuery = require('./authorQuery');
const authorsQuery = require('./authorsQuery');

const query = new GraphQLObjectType({
  name: 'queryType',
  fields: {
    book: bookQuery,
    books: booksQuery,
    author: authorQuery,
    authors: authorsQuery
  }
});

module.exports = query;
