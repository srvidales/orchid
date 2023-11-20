import { useState } from 'react';

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
      {/* Moved this to it's own file in the component's folder */}
      {/* Header
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <img src="image1.jpg" alt="School Logo" style={{ width: '45%' }} />
        <img src="image2.jpg" alt="School Photo" style={{ width: '45%' }} />
      </div> */}

      {/* Page Divider */}
      <hr
        style={{ width: '95%', margin: '20px auto', border: '2px solid black' }}
      />

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
      {showCostTuitionModal && (
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
          </div>
        </div>
      )}
      {showHealthyLessonsModal && (
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
          </div>
        </div>
      )}
      {showUpcomingEventsModal && (
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
          </div>
        </div>
      )}

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
