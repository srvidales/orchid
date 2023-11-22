// Importing necessary dependencies from React and React Bootstrap
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// Defining the Signup component
export default function Signup() {
  // Setting up state to manage form data (email, password, firstName, lastName, school)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    school: '',
  });

  // Using the useMutation hook to handle the user signup mutation
  const [signupUser, { error }] = useMutation(ADD_USER);

  // Event handler for input changes (when typing in the form fields)
  const handleChange = (e) => {
    // Destructuring to get the name and value from the target element
    const { name, value } = e.target;

    // Updating the form data based on the input changes
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSignup = async (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Checking form validity
    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      // Making a signup mutation request with the form data
      const { data } = await signupUser({
        variables: { ...formData },
      });

      // Logging in the user and storing the token in local storage
      Auth.login(data.signupUser.token);
    } catch (error) {
      // Handling errors that may occur during the signup process
      console.error('Error during signup:', error);
    }
  };

  // Rendering the signup form using React Bootstrap components
  return (
    <Container>
      {/* Signup Section */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Sign Up</h1>
          {/* Displaying an error message if there is an error */}
          {/* {signupError && <Alert variant="danger">{signupError}</Alert>} */}

          {/* Form for user signup */}
          <Form onSubmit={handleSignup}>
            {/* First Name input field */}
            <Form.Group controlId="formBasicSignupFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Last Name input field */}
            <Form.Group controlId="formBasicSignupLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Email input field */}
            <Form.Group controlId="formBasicSignupUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
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

            {/* School input field */}
            <Form.Group controlId="formBasicSignupSchool">
              <Form.Label>School</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your school"
                name="school"
                value={formData.school}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Submit button */}
            <Button variant="success" type="submit">
              Sign Up
            </Button>

            {/* Link to navigate to the login page */}
            <a href="/login">Login instead</a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
