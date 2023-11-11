const { gql } = require("apollo-server");


exports.typeDefs = gql`
  type Query {
    courses: [Course!]!
    course(id: ID!): Course!
    genres: [Genre!]!
    genre(id: ID!): Genre!
    numOfCourses: Int
    price: Float
    isTrainer: Boolean
    reviews: [Review!]!
  }

  type Course {
    id: ID!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre!
  }

  type Genre {
    id: ID!
    name: String!
    courses: [Course!]!
  }
  
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
`;
