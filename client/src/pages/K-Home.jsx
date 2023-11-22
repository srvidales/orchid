import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Healthy Learning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Wellness Essentials</h4>
        <p>
          We prioritize the well-being of and development of our littlest
          learners. Our team understands the importance of fostering healthy
          habits early on. Through engaging and age-appropriate activities, we
          integrate healthy lessons into our daily routine, focusing on
          promoting physical health, nutrition, and overall wellness.
        </p>
        <p>
          From active playtime that enhances motor skills to introducing
          nutritious snacks that encourage good eating habits, our curriculum is
          designed to lay the foundation for a lifetime of well-being. We
          believe that these healthy lessons not only contribute to the
          immediate happiness of our little ones but also pave the way for a
          future filled with vitality and positive habits.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Healthy Lessons
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);
