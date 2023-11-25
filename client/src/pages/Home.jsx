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
        p2="$800 for infants, $700 for toddlers, $650 for preschoolers"
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
        p1="Occaecat deserunt et nulla officia tempor dolor est do tempor non incididunt commodo ad cillum. Duis eu Lorem consectetur fugiat deserunt nostrud. Officia laborum Lorem ea ex consectetur veniam. Sit esse magna est non non. Ex officia velit duis cillum elit occaecat. Deserunt aute ex ex non ex culpa Lorem duis. Commodo fugiat consectetur et occaecat consequat ut magna tempor."
        p2="Occaecat ad exercitation quis do ex ullamco labore commodo cillum eu amet minim anim. Est amet magna cillum voluptate. In aliquip laboris velit consectetur. Enim dolor magna id ut magna nisi sit incididunt do dolor voluptate dolore sit. Ipsum pariatur proident eiusmod sunt quis eiusmod. Consectetur non velit duis aliquip anim enim quis reprehenderit exercitation cillum esse."
      />

      {/* {showCostTuitionModal && (
        <div className="modal" onClick={closeModals}>
          <div className="modal-content">
            <span className="close" onClick={closeModals}>
              &times;
            </span>
            <h2>Cost/Tuition</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolores placeat cumque tempore itaque minus distinctio nemo nobis?
              Consequatur, earum. Eum inventore recusandae veniam. Nobis libero
              autem quod vero veritatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolores placeat cumque tempore itaque minus distinctio nemo nobis?
              Consequatur, earum. Eum inventore recusandae veniam. Nobis libero
              autem quod vero veritatis?
            </p>
          </div>
        </div>
      )} */}

      {/* {showHealthyLessonsModal && (
        <div className="modal" onClick={closeModals}>
          <div className="modal-content">
            <span className="close" onClick={closeModals}>
              &times;
            </span>
            <h2>Healthy Lessons</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, eveniet tenetur. Ratione laboriosam error dolore
              commodi distinctio perspiciatis tempore nam alias accusamus qui,
              possimus voluptate, reprehenderit, nesciunt enim modi. Molestias!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, eveniet tenetur. Ratione laboriosam error dolore
              commodi distinctio perspiciatis tempore nam alias accusamus qui,
              possimus voluptate, reprehenderit, nesciunt enim modi. Molestias!
            </p>
          </div>
        </div>
      )} */}

      {/* {showUpcomingEventsModal && (
        <div className="modal" onClick={closeModals}>
          <div className="modal-content">
            <span className="close" onClick={closeModals}>
              &times;
            </span>
            <h2>Upcoming Events</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates laudantium facere error, dolore laborum tempora quaerat
              vero cum exercitationem quia id perspiciatis quidem atque sapiente
              tenetur consequatur ipsa soluta autem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates laudantium facere error, dolore laborum tempora quaerat
              vero cum exercitationem quia id perspiciatis quidem atque sapiente
              tenetur consequatur ipsa soluta autem.
            </p>
          </div>
        </div>
      )} */}

      {/* Request Information Card */}
      <div style={{ marginTop: '20px' }}>
        <h2>Request Information</h2>
        <p>Phone: XXX-XXX-XXXX</p>
        <p>Address: School Address</p>
        <p>About the School: Brief blurb about the school goes here.</p>
      </div>
    </div>
  );
};

export default Home;
