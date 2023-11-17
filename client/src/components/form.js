const form = [
  {
    name: "from_firstname",
    placeholder: "First Name",
    value: "from_firstname",
  },
  {
    name: "from_lastname",
    placeholder: "Last Name",
    value: "from_lastname",
  },
  {
    name: "email",
    placeholder: "yourname@email.com",
    value: "email",
  },
  {
    name: "cellphone",
    placeholder: "Cell Phone (408) 123-4567",
    value: "cellphone",
  },
  {
    name: "message",
    placeholder: "Send us your questions",
    value: "message",
  }
]

export default form;

// return (
// <div>
//   <h1>Contact Us</h1>
//   <div>
//     {
//       form.map((formArray)) => (
//         <FloatingLabel>
//           controlId={form.controlId}
//           label={form.label}
//           className="mb-3"
//           <Form.Control
//             type="text"
//             placeholder={form.label}
//             value=formState.{form.controlId}
//             onChange={handleChange}
//           />
//         </FloatingLabel>
//       )
//     }
// {/*         
//     <FloatingLabel
//       controlId="from_firstname"
//       label="First Name"
//       className="mb-3"
//     >
//       <Form.Control
//         type="text"
//         placeholder="First Name"
//         value={formState.from_firstname}
//         onChange={handleChange}
//       />
//     </FloatingLabel> */}

//     <label htmlFor="from_firstname">Guardian:</label>
//     <br></br>
//     <input
//       type="text"
//       name="from_firstname"
//       placeholder="First Name"
//       value={formState.from_firstname}
//       onChange={handleChange}
//       // width={2000}
//     />
//     <label htmlFor="from_lastname"></label>
//     <input
//       type="text"
//       name="from_lastname"
//       placeholder="Last Name"
//       value={formState.from_lastname}
//       onChange={handleChange}
//     />
//     <br></br>
//     <label htmlFor="from_lastname">Email: </label>
//     <input
//       type="text"
//       name="email"
//       placeholder="yourname@email.com"
//       value={formState.email}
//       onChange={handleChange}
//     />
//     <label htmlFor="from_lastname">Cell Phone: </label>
//     <input
//       type="text"
//       name="cellphone"
//       placeholder="Cell Phone (408) 123-4567"
//       value={formState.cellphone}
//       onChange={handleChange}
//     />
//     <p />
//     <label htmlFor="from_lastname">Send us a message: </label>
//     <br></br>
//     <textarea
//       type="text"
//       name="message"
//       placeholder="Send us your questions."
//       value={formState.message}
//       onChange={handleChange}
//       rows={4}
//       cols={50}
//     />

//     <div>
//       {["checkbox"].map((type) => (
//         <div key={`inline-${type}`} className="mb-3">
//           <Form.Check
//             inline
//             label="Morning 8AM - 11AM"
//             name="morning"
//             type={type}
//             id={`inline-${type}-1`}
//           />
//           <Form.Check
//             inline
//             label="Afternoon 12PM - 4PM"
//             name="afternoon"
//             type={type}
//             id={`inline-${type}-2`}
//           />
//           <Form.Check
//             inline
//             label="Evening 5PM - 7PM"
//             name="evening"
//             type={type}
//             id={`inline-${type}-3`}
//           />
//         </div>
//       ))}
//     </div>
//     <Button onClick={sendEmail}>Submit</Button>
//     <p>{displayMessage}</p>
//   </div>
// </div>
// );
// };