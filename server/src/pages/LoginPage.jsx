import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from ''; // Import your GraphQL mutation

import Nav from './components/Nav';
import Login from './components/Login';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Assuming you have a GraphQL mutation for login
  const [loginUser] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    try {
      // Call your GraphQL login mutation
      const { data } = await loginUser({
        variables: { username, password },
      });

      // Handle the response, e.g., store token in localStorage and redirect
      console.log(data);

      // Redirect the user to the /menu page or perform other actions
    } catch (error) {
      console.error(error);
      // Handle login error, show a message to the user, etc.
    }
  };

  return (
    <div>
      <Nav />
      <div className="login-container">
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;