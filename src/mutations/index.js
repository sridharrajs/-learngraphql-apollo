const { GraphQLObjectType } = require('graphql');

const addAuthor = require('./addAuthor');
const addBook = require('./addBook');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor,
    addBook
  }
});

module.exports = mutation;
