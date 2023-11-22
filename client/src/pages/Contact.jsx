import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';

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

  const sendEmail = () => {
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
          textMessage: '',
          specialMeal: '',
          to_name: 'Whippersnappers Daycare',
        });
        setDisplayMessage('Thank you for email the Whippersnappers Daycare.');
        setTimeout(() => setDisplayMessage(''), 6000);
      })
      .catch((err) => {
        console.log('Failed.', err);
        setDisplayMessage('Unable to send email. Please contact us by phone.');
        setTimeout(() => setDisplayMessage(''), 6000);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  // Handle time slots
  const handleCheckBoxChange = (e) => {
    const { name } = e.target;
    console.log(name);

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
    const { checked } = e.target; // Getting the checked property
    console.log(`OK to send texts? ${checked}`);
    setFormState({ ...formState, textMessage: checked });
  };

  const handleSpecialMealCheckBoxChange = (e) => {
    const { checked } = e.target; // Getting the checked property
    console.log(`Child has special dietary needs? ${checked}`);
    setFormState({ ...formState, specialMeal: checked });
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <div>
        {/* First Name */}
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

        {/* Last Name */}
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

        {/* Email */}
        <FloatingLabel controlId="email" label="Email" className="mb-b">
          <Form.Control
            type="text"
            value={formState.email}
            onChange={handleChange}
            name="email"
          />
        </FloatingLabel>
        <p></p>

        {/* Cell Phone */}
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

        {/* Message Box */}
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

        {/* Text Message and Times */}
        <div>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Morning 8AM - 11AM"
                name="morning"
                type={type}
                id={`inline-${type}-1`}
                checked={formState.timeSlots.includes('morning') ? true : false}
                onChange={handleCheckBoxChange}
              />
              <Form.Check
                inline
                label="Afternoon 12PM - 4PM"
                name="afternoon"
                type={type}
                id={`inline-${type}-2`}
                checked={
                  formState.timeSlots.includes('afternoon') ? true : false
                }
                onChange={handleCheckBoxChange}
              />
              <Form.Check
                inline
                label="Evening 5PM - 7PM"
                name="evening"
                type={type}
                id={`inline-${type}-3`}
                checked={formState.timeSlots.includes('evening') ? true : false}
                onChange={handleCheckBoxChange}
              />

              {/* Okay to send Text Messages */}
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
              {/* 
              Special Meals */}
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
        <Button onClick={sendEmail}>Submit</Button>

        <Button onClick={() => console.log(formState)}>Check State</Button>
        <p>{displayMessage}</p>
      </div>
    </div>
  );
};

export default Contact;
