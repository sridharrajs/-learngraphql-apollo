const { Author, Book } = require('../models');

const resolvers = {
  Query: {
    book: async (parent, args, context) => {
      const book = await Book.findById(args.id);
      book.author = await Author.findById(book.authorId)
      return book;
    },
    books: async (parent, args, context) => {
      const books = await Book.find({});
      for (const book of books) {
        book.author = await Author.findById(book.authorId);
      }
      return books;
    },
    author: async (parent, args, context) => {
      const author = await Author.findById(args.id);
      author.books = await Book.find({
        authorId: author.id
      });
      return author;
    },
    authors: async (parent, args, context) => {
      const authors = await Author.find({});
      for (const author of authors) {
        author.books = await Book.find({
          authorId: author.id
        });
      }
      return authors;
    }
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
