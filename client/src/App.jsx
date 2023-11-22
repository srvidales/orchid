import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS to style the app
import './App.css'; // Import custom CSS for the App component

// Import necessary dependencies from Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Outlet } from 'react-router-dom'; // Import React Router's Outlet component to render child components
import Header from './components/Header'; // Import the custom Header component

// Construct the main GraphQL API endpoint for the app
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that attaches the JWT token to every request as an 'authorization' header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // Return the updated headers with the token, or empty if token doesn't exist
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create the Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Use the 'authLink' middleware to add authorization header to requests
  cache: new InMemoryCache(), // Use InMemoryCache for caching
});

// Determines what gets displayed on the browser
function App() {
  return (
    // Wrap the entire app with ApolloProvider to provide the Apollo Client to all components
    <ApolloProvider client={client}>
      <div>
        {/* Render the Header component */}
        <Header />
        {/* Render the child components defined in React Router */}
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
