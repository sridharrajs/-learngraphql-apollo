const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    book(id:ID!): Book
    books:[Book]

    author(id:ID!): Author
    authors:[Author]
  }

  type Mutation {
    addAuthor(
      name: String!
      age: Int!
    ): Author

    addBook(
      name:String!
      genre:String!
      authorId:String!
    ): Book
  }

  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    books:[Book]
  }
`;

module.exports = { typeDefs };

