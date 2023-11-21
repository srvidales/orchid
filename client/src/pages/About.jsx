import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  const [screenWidth, setScreenWidth] = useState(screen.width);
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

  // useEffect(() => {
  //   const interval = setInterval(() => setScreenWidth(screen.width), 100);
  //   return () => clearInterval(interval);
  // }, [])

  // Hook to listen for resize event on the window and update the component's state for screen width
  const handleResize = (e) => {
    console.log('what the');
    setScreenWidth(e.target.innerWidth);
  };

  // The effect runs once when the component mounts the empty array []
  // Add event listener for resizing on the window
  // When the component is unmounted, it takes it removes the event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // The effect runs when screen width is changed.
  // Log the value of screen width.
  // Show the changes of the screen width state when window is resized
  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);

  return (
    <Row
      className="g-3"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      {cardData.map((card, idx) => (
        <Col
          key={idx}
          style={{ margin: '0', width: screenWidth > 500 ? '50%' : '100%' }}
        >
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

export default About;
