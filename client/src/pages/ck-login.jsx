import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { error }] = useMutation(LOGIN);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...formData },
      });
      Auth.login(data.loginUser.token);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Container>
      {/* Signup Section */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Login</h1>
          {/* {signupError && <Alert variant="danger">{signupError}</Alert>} */}
          <Form onSubmit={handleSubmit}>
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

            <Button variant="success" type="submit">
              Log In
            </Button>
            <a href="/signup">Signup instead</a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
