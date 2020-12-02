const { GraphQLInt, GraphQLNonNull, GraphQLString } = require('graphql');

const { Author } = require('../models');
const { AuthorType } = require('../types');

const addAuthor = {
  type: AuthorType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    age: {
      type: GraphQLInt
    }
  },
  resolve(parent, args) {
    const author = new Author({
      name: args.name,
      age: args.age
    });
    return author.save();
  }
};

module.exports = addAuthor;
