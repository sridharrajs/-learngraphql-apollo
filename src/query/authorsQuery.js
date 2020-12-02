const { GraphQLList } = require('graphql');

const { Author } = require('../models');
const { AuthorType } = require('../types');

const authorsQuery = {
  type: new GraphQLList(AuthorType),
  resolve(parent, args) {
    return Author.find({});
  }
};

module.exports = authorsQuery;
