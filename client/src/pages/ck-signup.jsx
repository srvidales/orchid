import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    school: '',
  });

  const [signupUser, { error }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      const { data } = await signupUser({
        variables: { ...formData },
      });

      Auth.login(data.signupUser.token);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  
  return (
    <Container>
      {/* Signup Section */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Sign Up</h1>
          {/* {signupError && <Alert variant="danger">{signupError}</Alert>} */}
          <Form onSubmit={handleSignup}>
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

            <Form.Group controlId="formBasicSignupPassword">
              <Form.Label>School</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your password"
                name="school"
                value={formData.school}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Sign Up
            </Button>
            <a href="/login">login instead</a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
