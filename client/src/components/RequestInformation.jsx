import { Card, Button } from 'react-bootstrap';

function Request() {
  return (
    <Card style={{ width: '45%' }}>
      <Card.Body>
        <Card.Title>Wicked Whippersnappers of Rapscallions, CA</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Button>Request Information</Button>
        </Card.Subtitle>
        <Card.Text>
          Every day at our daycare, we witness the blossoming of your child's
          imagination and the unstoppable surge of their curiosity. At Wicked
          Whippersnappers Academy, we embrace and applaud every moment of this
          remarkable journey. Here in Wicked, we empower your child to explore,
          learn, and celebrate the incredible tapestry of their growing world.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        <Card.Link href="#">Yet Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Request;
