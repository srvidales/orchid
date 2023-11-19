import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
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

  // Handle Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (loginUsername === 'exampleUser' && loginPassword === 'password') {
      // Successful login
      setLoginError(null);
      console.log('Login successful!');
      // Redirect to Menu Dashboard.. (TODO: Logic Needed)
    } else {
      setLoginError('Invalid username or password');
      setTimeout(() => setLoginError(null), 3000);
    }
  };

  // Handle Signup Function
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      if (signupUsername && signupPassword && signupFirstName && signupLastName) {
        // Successful signup 
        setSignupError(null);
        console.log('Signup successful!');
        // Redirect to Menu Dashboard.. (TODO: Logic Needed)
      } else {
        setSignupError('All fields are required for signup!');
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
