import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  const cardData = [
    {
      title: 'Our Daycare',
      text: 'We are committed to upholding excellence and integrity in every facet of our daycare. Seeking inventive approaches to benefit our little learners is a priority. Collaboration and teamwork are essential components of our success. We extend dignity and respect to everyone we encounter. Our unwavering dedication is directed towards the well-being of families.',
    },
    {
      title: 'Vision',
      text: 'We take pride in empowering and celebrating each milestone of their development.',
    },
    {
      title: 'Mission',
      text: "Through our dedication in focusing on providing healthy and well-balanced meals, Wicked Whippersnappers ensures that your child's nutritional needs are met, nurturing their well-being.",
    },
    {
      title: 'Values',
      text: "Our learning approach and curriculum encourages exploration and progress tailored to each child's unique pace and style. We foster social, physical, emotional, and intellectual growth. Our team of highly trained educators is passionately committed to guiding, nurturing, and cultivating the full spectrum of your child's development.",
    },
  ];

  import React from 'react';
  import Card from 'react-bootstrap/Card';
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';

  function About() {
    const cardData = [
      {
        title: 'Our Daycare',
        text: 'We are committed to upholding excellence and integrity in every facet of our daycare. Seeking inventive approaches to benefit our little learners is a priority. Collaboration and teamwork are essential components of our success. We extend dignity and respect to everyone we encounter. Our unwavering dedication is directed towards the well-being of families.',
      },
      {
        title: 'Vision',
        text: 'We take pride in empowering and celebrating each milestone of their development.',
      },
      {
        title: 'Mission',
        text: "Through our dedication in focusing on providing healthy and well-balanced meals, Wicked Whippersnappers ensures that your child's nutritional needs are met, nurturing their well-being.",
      },
      {
        title: 'Values',
        text: "Our learning approach and curriculum encourages exploration and progress tailored to each child's unique pace and style. We foster social, physical, emotional, and intellectual growth. Our team of highly trained educators is passionately committed to guiding, nurturing, and cultivating the full spectrum of your child's development.",
      },
    ];

    return (
      <Row
        xs={1}
        md={2}
        className="g-3"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {cardData.map((card, idx) => (
          <Col key={idx} xs={12} md={6} style={{ flex: '1', margin: '0' }}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
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
}

export default About;
