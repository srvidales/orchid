import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Button, Form, FloatingLabel, Overlay } from 'react-bootstrap';

const Contact = () => {
  const [formState, setFormState] = useState({
    from_firstname: '',
    from_lastname: '',
    email: '',
    cellphone: '',
    message: '',
    timeSlots: [],
    textMessage: '',
    specialMeal: '',
    to_name: 'Whippersnappers Daycare',
  });

  const [displayMessage, setDisplayMessage] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const sendEmail = () => {
    if (
      !formState.from_firstname ||
      !formState.from_lastname ||
      !formState.email ||
      !formState.cellphone
    ) {
      setDisplayMessage('Please fill out all required fields.');
      setTimeout(() => {
        setDisplayMessage('');
        setShowOverlay(false);
      }, 8000);
      return;
    }
    emailjs
      .send(
        'service_of106il',
        'template_edqhx5z',
        { ...formState },
        'fUTN7iOm_VoOcuw60',
      )
      .then((response) => {
        console.log('Success.', response.status, response.text);
        setFormState({
          from_firstname: '',
          from_lastname: '',
          email: '',
          cellphone: '',
          message: '',
          timeSlots: [],
          textMessage: false,
          specialMeal: false,
          to_name: 'Whippersnappers Daycare',
        });
        setDisplayMessage('Thank you for emailing Whippersnappers Daycare.');
        setShowOverlay(true);

        setTimeout(() => {
          setDisplayMessage('');
          setShowOverlay(false);
        }, 7000);
      })
      .catch((err) => {
        console.log('Failed.', err);
        setDisplayMessage(
          'Unable to send email. Please contact us by phone. (408) 123-4567',
        );
        setTimeout(() => setDisplayMessage(''), 7000);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleCheckBoxChange = (e) => {
    const { name } = e.target;

    if (formState.timeSlots.includes(name)) {
      const updatedTimes = formState.timeSlots.filter((time) => time !== name);
      setFormState({ ...formState, timeSlots: updatedTimes });
    } else {
      setFormState({ ...formState, timeSlots: [...formState.timeSlots, name] });
    }

    switch (name) {
      case 'textMessage':
        setFormState({ ...formState, textMessage: e.target.checked });
        break;
      case 'specialMeal':
        setFormState({ ...formState, specialMeal: e.target.checked });
        break;
      default:
        break;
    }
  };

  const handleSendTextCheckBoxChange = (e) => {
    const { checked } = e.target;
    setFormState({ ...formState, textMessage: checked });
  };

  const handleSpecialMealCheckBoxChange = (e) => {
    const { checked } = e.target;
    setFormState({ ...formState, specialMeal: checked });
  };

  return (
    <>
      <div
        style={{
          display: 'inline-block',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>Contact Us</h1>
        <FloatingLabel
          controlId="from_firstname"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            value={formState.from_firstname}
            onChange={handleChange}
            name="from_firstname"
          />
        </FloatingLabel>
        <p></p>

        <FloatingLabel
          controlId="from_lastname"
          label="Last Name"
          className="mb-b"
        >
          <Form.Control
            type="text"
            value={formState.from_lastname}
            onChange={handleChange}
            name="from_lastname"
          />
        </FloatingLabel>
        <p></p>

        <FloatingLabel controlId="email" label="Email" className="mb-b">
          <Form.Control
            type="text"
            value={formState.email}
            onChange={handleChange}
            name="email"
          />
        </FloatingLabel>
        <p></p>

        <FloatingLabel
          controlId="cellphone"
          label="Cell Phone"
          className="mb-b"
        >
          <Form.Control
            type="text"
            value={formState.cellphone}
            onChange={handleChange}
            name="cellphone"
          />
        </FloatingLabel>
        <p></p>

        <FloatingLabel
          controlId="message"
          label="Send us a message."
          className="mb-b"
        >
          <Form.Control
            as="textarea"
            value={formState.message}
            onChange={handleChange}
            name="message"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <p></p>

        <div>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Morning 8AM - 11AM"
                name="morning"
                type={type}
                id={`inline-${type}-1`}
                checked={formState.timeSlots.includes('morning')}
                onChange={handleCheckBoxChange}
              />
              <Form.Check
                inline
                label="Afternoon 12PM - 4PM"
                name="afternoon"
                type={type}
                id={`inline-${type}-2`}
                checked={formState.timeSlots.includes('afternoon')}
                onChange={handleCheckBoxChange}
              />
              <Form.Check
                inline
                label="Evening 5PM - 7PM"
                name="evening"
                type={type}
                id={`inline-${type}-3`}
                checked={formState.timeSlots.includes('evening')}
                onChange={handleCheckBoxChange}
              />

              <p></p>
              <Form.Check
                inline
                label="OK to send text messages to me. (Standard text message rates apply.)"
                name="textMessage"
                type={type}
                id={`inline-${type}-4`}
                checked={formState.textMessage}
                onChange={handleSendTextCheckBoxChange}
              />
              <p></p>
              <Form.Check
                inline
                label="My child has special needs regarding their meals."
                name="specialMeal"
                type={type}
                id={`inline-${type}-5`}
                checked={formState.specialMeal}
                onChange={handleSpecialMealCheckBoxChange}
              />
            </div>
          ))}
        </div>

        {/* Display success message below the button */}
        {displayMessage && (
          <p
            style={{
              color: displayMessage.includes('Please fill out')
                ? '#8B0000'
                : 'white',
              fontSize: '26px',
            }}
          >
            <em>{displayMessage}</em>
          </p>
        )}

        {/* Display confetti and success overlay */}

        <Button onClick={sendEmail}>
          Submit
          <Overlay show={showOverlay} target={document.body} placement="top">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'green',
                  padding: '10px',
                  borderRadius: '5px',
                  color: 'white',
                  textAlign: 'center',
                  zIndex: 1000,
                }}
              >
                {/* <ConfettiOverlay /> */}
                Form submitted successfully!
              </div>
            )}
          </Overlay>
        </Button>

        {/* Check State button for testing */}
      </div>
    </>
  );
};

export default Contact;
