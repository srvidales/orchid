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
        'service_of106il',
        'template_edqhx5z',
        { ...formState },
        'fUTN7iOm_VoOcuw60',
        'fUTN7iOm_VoOcuw60',
      )
      .then((response) => {
        console.log('Success.', response.status, response.text);
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
        setDisplayMessage('Thank you for email the Whippersnappers Daycare.');
        setTimeout(() => setDisplayMessage(''), 6000);
      })
      .catch((err) => {
        console.log('Failed.', err);
        setDisplayMessage('Unable to send email. Please contact us by phone.');
        setTimeout(() => setDisplayMessage(''), 6000);
        console.log('Failed.', err);
        setDisplayMessage('Unable to send email. Please contact us by phone.');
        setTimeout(() => setDisplayMessage(''), 6000);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });

    const form = [
      { controlId: 'from_firstname', label: 'First name' },
      { controlId: '', label: '' },
      { controlId: '', label: '' },
      { controlId: '', label: '' },
      { controlId: '', label: '' },
      { controlId: 'from_firstname', label: 'First name' },
      { controlId: '', label: '' },
      { controlId: '', label: '' },
      { controlId: '', label: '' },
      { controlId: '', label: '' },
    ];
  };

  const handleCheckBoxChange = (e) => {
    const { name } = e.target;
    console.log(name);
    if (formState.timeSlots.includes(name)) {
      const updatedTimes = formState.timeSlots.filter((time) => time !== name);
      setFormState({ ...formState, timeSlots: updatedTimes });
      return;
    }

    const { text } = e.target;
    console.log(text);
    if (formState.textMessage.includes(text)) {
      const updatedTextMessage = formState.textMessage.filter(
        (time) => time !== text,
      );
      setFormState({ ...formState, textMessage: updatedTextMessage });
      return;
    }
    setFormState({
      ...formState,
      timeSlots: [...formState.timeSlots, name],
      textMessage: [...formState.textMessage, text],
    });
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
              <p></p>
              <Form.Check
                inline
                label="OK to send text messages to me. (Standard text message rates apply.)"
                name="textMessage"
                type={type}
                id={`inline-${type}-4`}
                checked={
                  formState.timeSlots.includes('textMessage') ? true : false
                }
                onChange={handleCheckBoxChange}
              />
              <Form.Check
                inline
                label="My child has special needs regarding their meals."
                name="specialMeal"
                type={type}
                id={`inline-${type}-4`}
                checked={
                  formState.timeSlots.includes('specialMeal') ? true : false
                }
                onChange={handleCheckBoxChange}
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

{
  /* <label htmlFor="from_firstname">Guardian:</label>
      <input
        type="text"
        name="from_firstname"
        placeholder="First Name"
        value={formState.from_firstname}
        onChange={handleChange}
      />
      <label htmlFor="from_lastname"></label>
      <input
        type="text"
        name="from_lastname"
        placeholder="Last Name"
        value={formState.from_lastname}
        onChange={handleChange}
      />  */
}

// <br></br>
// <label htmlFor="email">Email: </label>
// <input
//   type="text"
//   name="email"
//   placeholder="yourname@email.com"
//   value={formState.email}
//   onChange={handleChange}
// />
// <label htmlFor="cellphone">Cell Phone: </label>
// <input
//   type="text"
//   name="cellphone"
//   placeholder="Cell Phone (408) 123-4567"
//   value={formState.cellphone}
//   onChange={handleChange}
// />

{
  /* <p />
<label htmlFor="message">Send us a message: </label>
<br></br>
<textarea
  type="text"
  name="message"
  placeholder="Send us your questions."
  value={formState.message}
  onChange={handleChange}
  rows={4}
  cols={50}
/> */
}
