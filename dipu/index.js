const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {AuthenticationError} = require('apollo-server-express');
const db = require('./db');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');


const port =process.env.PORT || 4000;

const baseUrl = process.env.BACK4APP_URL || `http://localhost:${port}`;


db.connect();


 function getUser(token) {
  if (token) {
    try {

      return jwt.verify(token, 'K$9vL8@i0zY1!mPqF2w')
    } catch (err) {
      console.log("wrong token")
      throw new AuthenticationError('Session invalid');
    }
  }
  return null;

};

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context ({ req }) {

    const token = req.headers.authorization;

    const user = getUser(token);
   
    console.log(user);

    return { models, user };
  }
});

async function startServer() {
  
 
  await server.start();

  server.applyMiddleware({ app, path: '/dipankar' });

  app.listen({ port },'0.0.0.0', () =>
    // console.log(
    //   `GraphQL Server running at http://0.0.0.0:${port}${server.graphqlPath}`
    // )
    console.log(`GraphQL Server running at ${baseUrl}${server.graphqlPath}`)
  );
}


startServer();

