import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import VerticalModal from '../components/VerticalModal.jsx';

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

  return (
    <div>
      {/* Clickable Info Cards  */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div onClick={openCostTuitionModal} className="clickable-box">
          Cost/Tuition
        </div>
        <div onClick={openHealthyLessonsModal} className="clickable-box">
          Healthy Lessons
        </div>
        <div onClick={openUpcomingEventsModal} className="clickable-box">
          Upcoming Events
        </div>
      </div>

      {/* Modals */}

      <VerticalModal
        show={showCostTuitionModal}
        onHide={closeModals}
        title="Cost and Tuition"
        p1="Discover a nurturing and enriching environment for your little ones at our daycare, where we prioritize their growth and well-being. Our dedicated team provides exceptional care for infants, fostering a safe and stimulating atmosphere. We strive to offer a valuable and affordable investment in your child's early development. Join us in creating a foundation for lifelong learning and happiness for your precious ones. Monthly tuition is as follows:"
        p2="$800 for infants"
        p3="$700 for toddlers"
        p4="$650 for preschoolers"
      />

      <VerticalModal
        show={showHealthyLessonsModal}
        onHide={closeModals}
        title="Healthy Learning"
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
        title="Upcoming Events"
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
