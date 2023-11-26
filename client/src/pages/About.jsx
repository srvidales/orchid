import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import OurDaycare from '../assets/images/3D/bus-trip.png';
import Snacking from '../assets/images/3D/kids-snacking.png';
import Matching from '../assets/images/3D/matching.png';
import Sharing from '../assets/images/3D/sharing-oranges.png';

function About() {
  const cardData = [
    {
      title: 'Our Daycare',
      text: 'Committed to upholding excellence and integrity, our daycare prioritizes inventive approaches to benefit little learners. Collaboration and teamwork are essential for our success. We extend dignity and respect to everyone we encounter, dedicating ourselves to the well-being of families.',
      image: OurDaycare,
    },
    {
      title: 'Values',
      text: "Our learning approach and curriculum encourages exploration and progress tailored to each child's unique pace and style. We foster social, physical, emotional, and intellectual growth. Our team of educators are committed to guiding, nurturing, and cultivating the full spectrum of your child's development.",
      image: Sharing,
    },
    {
      title: 'Vision',
      text: "We take pride in ensuring that Wicked Whippersnappers focuses on providing healthy and well-balanced meals, meeting your child's nutritional needs, and nurturing their overall well-being.",
      image: Matching,
    },
    {
      title: 'Mission',
      text: "Through our dedication in focusing on providing healthy and well-balanced meals, Wicked Whippersnappers ensures that your child's nutritional needs are met, nurturing their well-being.",
      image: Snacking,
    },
  ];

  return (
    <Row md={2} className="g-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cardData.map((card, idx) => (
        <Col key={idx} xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default About;
