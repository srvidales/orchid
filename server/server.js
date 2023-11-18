// Import necessary modules
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

// Import GraphQL schema and resolvers
const { typeDefs, resolvers } = require('./schemas');

// Import MongoDB connection
const db = require('./config/connection');

// Set the port for the Express server or use the default 3001
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();

// Create an instance of Apollo Server with the defined schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Async function to start the Apollo Server
const startApolloServer = async () => {
  // Start the Apollo Server
  await server.start();

  // Configure middleware to handle URL-encoded and JSON data
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve static assets and HTML in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Route all other requests to the React app in production
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Use Apollo Server middleware at the '/graphql' endpoint
  app.use('/graphql', expressMiddleware(server));

  // Once MongoDB connection is open, start the Express server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
