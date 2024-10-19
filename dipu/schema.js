const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type Note {
    id: ID!
    content: String!
    author: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    
    notes: [Note!]!
  }

  type Query {
    notes(id:String): [Note]
    note(id: ID): Note!
    user(username: String!): User
    users: [User!]!
    me: User!
  }

  type Mutation {
    newNote(id:ID,content:String,author:String): Note
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    signUp(id:ID,username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
  }
  
`;
