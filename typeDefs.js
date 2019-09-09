const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Query {
    getUser(id: ID!): User
    getUsers: [User]
    getPosts: [Post]
  }
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
}
type Post {
    id: ID!
    title: String!
    description: String!
}
type Mutation {
    addUser(name: String!, email: String!, password: String!): User!,
    addPost(title: String!, description: String!): Post!,
    deleteUser(id: ID!): String
}
`;

module.exports = typeDefs;