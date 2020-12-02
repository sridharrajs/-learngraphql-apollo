const { Author, Book } = require('../models');

const resolvers = {
  Query: {
    book: async (parent, args, context) => {
      return {
        book: await Book.findById(args.id),
        author: (parent, args, context) => {
          return Book.find({
            authorId: parent.id
          });
        }
      }
    },
    books: (parent, args, context) => {
      return Book.find({});
    },
    author: (parent, args, context) => {
      return Author.findById(args.id);
    },
    authors: (parent, args, context) => {
      return Author.find({});
    },
    // Book: (parent, args, context) => {
    //   return Author.findById(parent.authorId);
    // }
  },
  Mutation: {
    addAuthor: (parent, args, context) => {
      const author = new Author({
        name: args.name,
        age: args.age
      });
      return author.save();
    },
    addBook: (parent, args, context) => {
      const book = new Book({
        name: args.name,
        genre: args.genre,
        authorId: args.authorId
      });
      return book.save();
    }
  }
}

module.exports = { resolvers };
