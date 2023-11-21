import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER, LOGIN_USER } from '../../../server/utils/mutation';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // Initialize the useHistory hook to redirect the user
  const navigate = useNavigate();

  // Set the initial state of the login and signup forms
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  // Set the initial state of the signup form
  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState(null);

  // Use useMutation hook to execute the GraphQL mutations
  try {
    const [loginUser] = useMutation(LOGIN_USER);
    // rest of the code
  } catch (error) {
    console.error('Error initializing useMutation:', error);
  }
  const [signupUser] = useMutation(SIGNUP_USER);

  // Handle Login Function
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: {
          username: loginUsername,
          password: loginPassword,
        },
      });

      // Check if login was successful
      if (data.loginUser.token) {
        // Redirect to Admin page
        navigate('/admin');
      } else {
        // Handle login error
        setLoginError('Invalid username or password');
        setTimeout(() => setLoginError(null), 3000);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An error occurred during login. Please try again.');
      setTimeout(() => setLoginError(null), 3000);
    }
  };

  // Handle Signup Function
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signupUser({
        variables: {
          firstName: signupFirstName,
          lastName: signupLastName,
          email: signupUsername,
          password: signupPassword,
        },
      });

      // Check if signup was successful
      if (data.signupUser.token) {
        // Redirect to Admin page
        navigate('/admin');
      } else {
        // Handle signup error
        setSignupError('Signup failed. Please check your information and try again.');
        setTimeout(() => setSignupError(null), 3000);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setSignupError('An error occurred during signup. Please try again.');
      setTimeout(() => setSignupError(null), 3000);
    }
  };

  return (
    <Container>
      {/* Login Section */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Login</h1>
          {loginError && <Alert variant="danger">{loginError}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Page Divider */}
      <hr style={{ width: '95%', margin: '20px auto', border: '2px solid black' }} />

      {/* Signup Section */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Sign Up</h1>
          {signupError && <Alert variant="danger">{signupError}</Alert>}
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formBasicSignupFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={signupFirstName}
                onChange={(e) => setSignupFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSignupLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={signupLastName}
                onChange={(e) => setSignupLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSignupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSignupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
