import React from 'react';
import { Card } from 'react-bootstrap';
import { IoPhonePortraitSharp } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdTextsms } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Request() {
  return (
    <Card
      style={{
        marginTop: '2%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Card.Body>
        <Card.Title>Wicked Whippersnappers Daycare</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Rapscallions, CA
        </Card.Subtitle>
        <Card.Text>
          Every day at our daycare, we witness the blossoming of your child's
          imagination and the unstoppable surge of their curiosity. At Wicked
          Whippersnappers Academy, we embrace and applaud every moment of this
          remarkable journey. Here in Wicked, we empower your child to explore,
          learn, and celebrate the incredible tapestry of their growing world.
        </Card.Text>
      </Card.Body>
      <Card.Body
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Card.Link href="#">
          <IoPhonePortraitSharp /> 408-123-4567
        </Card.Link>
        <Card.Link href="#">
          <FaMapMarkerAlt /> Location
        </Card.Link>
        <Link to="/contact">
          <Card.Link>
            <MdTextsms /> Find Out More
          </Card.Link>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Request;
