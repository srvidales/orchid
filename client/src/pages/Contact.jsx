import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

const Contact = () => {
  const [formState, setFormState] = useState({
    from_firstname: "",
    from_lastname: "",
    email: "",
    cellphone: "",
    message: "",
    to_name: "Whippersnappers Daycare",
  });

  const [displayMessage, setDisplayMessage] = useState("");

  const sendEmail = () => {
    emailjs
      .send(
        "service_of106il",
        "template_edqhx5z",
        { ...formState },
        "fUTN7iOm_VoOcuw60"
      )
      .then((response) => {
        console.log("Success.", response.status, response.text);
        setFormState({
          from_firstname: "",
          from_lastname: "",
          email: "",
          cellphone: "",
          message: "",
          to_name: "Whippersnappers Daycare",
        });
        setDisplayMessage("Thank you for email the Whippersnappers Daycare.");
        setTimeout(() => setDisplayMessage(""), 6000);
      })
      .catch((err) => {
        console.log("Failed.", err);
        setDisplayMessage("Unable to send email. Please contact us by phone.");
        setTimeout(() => setDisplayMessage(""), 6000);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });

    const form = [
      { controlId: "from_firstname", label: "First name" },
      { controlId: "", label: "" },
      { controlId: "", label: "" },
      { controlId: "", label: "" },
      { controlId: "", label: "" },
    ];
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        {/* <FloatingLabel
          controlId="from_firstname"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="First Name"
            value={formState.from_firstname}
            onChange={handleChange}
          />
        </FloatingLabel> */}
        <label htmlFor="from_firstname">Guardian:</label>
        <input
          type="text"
          name="from_firstname"
          placeholder="First Name"
          value={formState.from_firstname}
          onChange={handleChange}
          // width={2000}
        />
        <label htmlFor="from_lastname"></label>
        <input
          type="text"
          name="from_lastname"
          placeholder="Last Name"
          value={formState.from_lastname}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          placeholder="yourname@email.com"
          value={formState.email}
          onChange={handleChange}
        />
        <label htmlFor="cellphone">Cell Phone: </label>
        <input
          type="text"
          name="cellphone"
          placeholder="Cell Phone (408) 123-4567"
          value={formState.cellphone}
          onChange={handleChange}
        />
        <p />
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
        />
        {/* 
        //! Submit Checkboxes Need to be handled and sent. 
        //! Width of the forms? Should I do a class and width them there?
        //! I want to use Form.Control && FloatingLabel && TextArea
        //! https://react-bootstrap.netlify.app/docs/forms/floating-labels
        //! How do I map over or should I use a component for the contact form?
        */}

        <div>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Morning 8AM - 11AM"
                name="morning"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Afternoon 12PM - 4PM"
                name="afternoon"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Evening 5PM - 7PM"
                name="evening"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </div>
        <Button onClick={sendEmail}>Submit</Button>
        <p>{displayMessage}</p>
      </div>
    </div>
  );
};

export default Contact;
