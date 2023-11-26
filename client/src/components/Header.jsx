import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoImage from '../assets/logo/logo.png';
import schoolImage from '../assets/images/school.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="mt-2">
      {/* Navbar component with the current page passed as a prop */}
      <Nav page={currentPage} />

      {/* Container for the images, with Bootstrap layout classes */}
      <Container className="mt-3">
        {/* Image 1 with alt text and styling */}
        <Row>
          <Col xs={12} sm={12} md={6} className="mb-1">
            <Image
              src={logoImage}
              alt="School Logo"
              style={{ width: '100%' }}
              className="d-block"
            />
          </Col>
          {/* Image 2 with alt text and styling */}
          <Col xs={12} sm={12} md={6} className="mb-2">
            <Image
              src={schoolImage}
              alt="School Photo"
              rounded
              style={{ width: '100%' }}
              className="d-none d-md-block"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
