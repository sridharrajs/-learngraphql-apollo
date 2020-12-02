const { GraphQLID } = require('graphql');

const { Author } = require('../models');
const { AuthorType } = require('../types');

const authorQuery = {
  type: AuthorType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parent, args) {
    return Author.findById(args.id);
  }
};

module.exports = authorQuery;
