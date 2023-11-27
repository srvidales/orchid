import { useState } from 'react';
import {
  Button,
  Form,
  FloatingLabel,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

const Item = () => {
  const [formState, setFormState] = useState({
    item_name: '',
    mealChosen: '',
    course: '',
  });

  const [displayMessage, setDisplayMessage] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleCheckBoxChange = (e) => {
    const { name } = e.target;

    if (formState.mealChosen.includes(name)) {
      const updatedMeal = formState.mealChosen.filter((meal) => meal !== name);
      setFormState({ ...formState, mealChosen: updatedMeal });
    } else {
      setFormState({
        ...formState,
        mealChosen: [...formState.mealChosen, name],
      });
    }

    // switch (name) {
    //   case 'meal':
    //     setFormState({ ...formState, meal: e.target.checked });
    //     break;
    //   case 'course':
    //     setFormState({ ...formState, course: e.target.checked });
    //     break;
    //   default:
    //     break;
    // }
  };

  // const handleSendTextCheckBoxChange = (e) => {
  //   const { checked } = e.target;
  //   setFormState({ ...formState, meal: checked });
  // };

  // const handleSpecialMealCheckBoxChange = (e) => {
  //   const { checked } = e.target;
  //   setFormState({ ...formState, course: checked });
  // };

  return (
    <>
      <div
        style={{
          display: 'inline-block',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1>Add Menu Item</h1>
        <FloatingLabel controlId="item_name" label="Item Name" className="mb-3">
          <Form.Control
            type="text"
            value={formState.item_name}
            onChange={handleChange}
            name="item_name"
          />
        </FloatingLabel>
        <p></p>

        <div>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Breakfast"
                name="breakfast"
                type={type}
                id={`inline-${type}-1`}
                checked={formState.mealChosen.includes('breakfast')}
                onChange={handleCheckBoxChange}
              />
              <Form.Check
                inline
                label="Lunch"
                name="lunch"
                type={type}
                id={`inline-${type}-2`}
                checked={formState.mealChosen.includes('lunch')}
                onChange={handleCheckBoxChange}
              />
              <Form.Check
                inline
                label="Snack"
                name="snack"
                type={type}
                id={`inline-${type}-3`}
                checked={formState.mealChosen.includes('snack')}
                onChange={handleCheckBoxChange}
              />
              {/* 
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
              /> */}
            </div>
          ))}
        </div>

        <hr></hr>

        <h2>Menu Editor</h2>
        <FloatingLabel controlId="item_name" label="Item Name" className="mb-3">
          <Form.Control
            type="text"
            value={formState.item_name}
            onChange={handleChange}
            name="item_name"
          />
        </FloatingLabel>
        <p></p>
        <div className="d-inline-block mx-2">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Option
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Add</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-inline-block mx-2">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-autoclose-true">Meal</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Lunch</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Snack</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-inline-block mx-2">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Course
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Entree</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Side</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Drink</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Snack</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Button>Clear</Button>
          <Button>Submit</Button>
        </div>
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

      {/* <Button onClick={sendEmail}>
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
                Success
              </div>
            )}
          </Overlay>
        </Button> */}

      {/* Check State button for testing */}
      {/* <Button onClick={handleCheckState}>Check State</Button> */}
    </>
  );
};

export default Item;
