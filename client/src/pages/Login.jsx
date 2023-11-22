// Importing necessary dependencies from React and React Bootstrap
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// Defining the Login component
export default function Login() {
  // Setting up state to manage form data (email and password)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Using the useMutation hook to handle the login mutation
  const [loginUser, { error }] = useMutation(LOGIN);

  // Event handler for input changes (when typing in the email or password fields)
  const handleChange = (e) => {
    // Destructuring to get the name and value from the target element
    const { name, value } = e.target;

    // Updating the form data based on the input changes
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Checking form validity
    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      // Making a login mutation request with the form data
      const { data } = await loginUser({
        variables: { ...formData },
      });

      // Logging in the user and storing the token in local storage
      Auth.login(data.loginUser.token);
    } catch (error) {
      // Handling errors that may occur during the login process
      console.error('Error during login:', error);
    }
  };

  // Rendering the login form using React Bootstrap components
  return (
    <Container>
      {/* Login Section */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Login</h1>
          {/* Displaying an error message if there is an error */}
          {/* {signupError && <Alert variant="danger">{signupError}</Alert>} */}

          {/* Form for user login */}
          <Form onSubmit={handleSubmit}>
            {/* Email input field */}
            <Form.Group controlId="formBasicSignupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Password input field */}
            <Form.Group controlId="formBasicSignupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Submit button */}
            <Button variant="success" type="submit">
              Log In
            </Button>

            {/* Link to navigate to the signup page */}
            <a href="/signup">Signup instead</a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
