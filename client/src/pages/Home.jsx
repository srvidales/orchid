import { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VerticalModal from '../components/VerticalModal.jsx';
import cost from '../assets/images/contract.png';
import health from '../assets/images/2D/field-group.png';
import upcomingevents from '../assets/images/trip-planning.png';

const Home = () => {
  // Set the initial state of the modals to false
  const [showCostTuitionModal, setShowCostTuitionModal] = useState(false);
  const [showHealthyLessonsModal, setShowHealthyLessonsModal] = useState(false);
  const [showUpcomingEventsModal, setShowUpcomingEventsModal] = useState(false);

  // Create functions to open the modals
  const openCostTuitionModal = () => setShowCostTuitionModal(true);
  const openHealthyLessonsModal = () => setShowHealthyLessonsModal(true);
  const openUpcomingEventsModal = () => setShowUpcomingEventsModal(true);

  // Create a function to close all modals
  const closeModals = () => {
    setShowCostTuitionModal(false);
    setShowHealthyLessonsModal(false);
    setShowUpcomingEventsModal(false);
  };

  // Array to dynamically give information to Card Modals
  const cardData = [
    {
      title: 'Cost & Tuition',
      imageSrc: cost,
      modal: openCostTuitionModal,
    },
    {
      title: 'Healthy Lessons',
      imageSrc: health,
      modal: openHealthyLessonsModal,
    },
    {
      title: 'Upcoming Events',
      imageSrc: upcomingevents,
      modal: openUpcomingEventsModal,
    },
  ];

  return (
    <div>
      <Row md={2} className="g-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cardData.map((card, idx) => (
          <Col key={idx} xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={card.imageSrc}
                  alt={card.title}
                  onClick={card.modal}
                  style={{ cursor: 'pointer' }}
                />
                <p></p>
                <Card.Title>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modals */}
      <VerticalModal
        show={showCostTuitionModal}
        onHide={closeModals}
        title="Payments for School"
        p1="Discover a nurturing and enriching environment for your little ones at our daycare, where we prioritize their growth and well-being. Our dedicated team provides exceptional care for infants, fostering a safe and stimulating atmosphere. We strive to offer a valuable and affordable investment in your child's early development. Join us in creating a foundation for lifelong learning and happiness for your precious ones. Monthly tuition is as follows:"
        p2="$800 for infants"
        p3="$700 for toddlers"
        p4="$650 for preschoolers"
      />

      <VerticalModal
        show={showHealthyLessonsModal}
        onHide={closeModals}
        title="Wellness Lessons"
        p1="We prioritize the well-being of and development of our littlest
          learners. Our team understands the importance of fostering healthy
          habits early on. Through engaging and age-appropriate activities, we
          integrate healthy lessons into our daily routine, focusing on
          promoting physical health, nutrition, and overall wellness."
        p2=" From active playtime that enhances motor skills to introducing
          nutritious snacks that encourage good eating habits, our curriculum is
          designed to lay the foundation for a lifetime of well-being. We
          believe that these healthy lessons not only contribute to the
          immediate happiness of our little ones but also pave the way for a
          future filled with vitality and positive habits."
      />

      <VerticalModal
        show={showUpcomingEventsModal}
        onHide={closeModals}
        title="Celebrate Good Times"
        p1="We go beyond traditional child care by hosting a variety of seasonal events within our secure and educational environment. Rest assured, our local daycare center is always buzzing with exciting activities! Join the excitement at Wicked Whippersnappers — where every day brings new opportunities for fun and learning"
        p2="Hannakkuh, Kwanzaa, Christmas, and New Year's"
      />

      {/* Request Information Card */}
      <div style={{ marginTop: '20px' }}>
        <h2>Request Information</h2>
        <p>Phone: XXX-XXX-XXXX</p>
        <p>Address: School Address</p>
        <p>
          Every day at our daycare, we witness the blossoming of your child's
          imagination and the unstoppable surge of their curiosity. At Wicked
          Whippersnappers Academy, we embrace and applaud every moment of this
          remarkable journey. Here in Wicked, we empower your child to explore,
          learn, and celebrate the incredible tapestry of their growing world.
        </p>
      </div>
    </div>
  );
};

export default Home;
