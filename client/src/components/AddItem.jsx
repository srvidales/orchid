import { useState } from 'react';
import { Button, Form, FloatingLabel, Container, Row } from 'react-bootstrap';

const AddInventory = () => {
  const [formState, setFormState] = useState({
    item_name: '',
    mealChosen: '',
    course: '',
  });

  const [displayMessage, setDisplayMessage] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setFormState({ ...formState, [name]: value });
  };

  const addItem = () => {
    if (!formState.item_name || !formState.mealChosen || !formState.course) {
      setDisplayMessage('Please fill out all fields.');
      setTimeout(() => {
        setDisplayMessage('');
      }, 10000);
      return;
    }

    // Placeholder function for adding an item (replace with our logic)
    addNewItem({
      item_name: formState.item_name,
      mealChosen: formState.mealChosen,
      course: formState.course,
    });

    // Clear form state and show success message
    setFormState({
      item_name: '',
      mealChosen: '',
      course: '',
    });
    setDisplayMessage('Success in adding an item!');

    // Reset the success message after 10 seconds
    setTimeout(() => {
      setDisplayMessage('');
    }, 10000);

    try {
    } catch (err) {
      console.log('Failed.', err);
      setDisplayMessage('Unable to add item');

      // Reset the success message after 10 seconds
      setTimeout(() => setDisplayMessage(''), 10000);
    }
  };

  // Placeholder function, replace with our actual logic to add an item
  const addNewItem = (itemData) => {
    // Perform the action to add an item (make the API call, update state)
    console.log('Adding item:', itemData);
  };

  return (
    <>
      <Container style={{ maxWidth: '50%' }}>
        <Row>
          <div
            className="d-inline-block mx-3"
            style={{
              display: 'inline-block',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              padding: '1%',
            }}
          >
            <FloatingLabel
              controlId="item_name"
              label="Item Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                value={formState.item_name}
                onChange={handleChange}
                name="item_name"
              />
            </FloatingLabel>

            <div>
              <Form.Select
                value={formState.mealChosen}
                name="mealChosen"
                onChange={handleChange}
              >
                <option value="">Please Choose a Meal Time</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
              </Form.Select>
              {/* </div>

            <div className="d-inline-block mx-3"> */}
              <Form.Select
                value={formState.mealChosen}
                name="course"
                onChange={handleChange}
              >
                <option value="">Course</option>
                <option value="Breakfast">Entree</option>
                <option value="Lunch">Side</option>
                <option value="Snack">Drink</option>
                <option value="Snack">Snack</option>
              </Form.Select>
              <div className="d-inline-block mx-3">
                <Button>Clear Added Item</Button>
                <Button>Submit Added Item</Button>
                <Button onClick={() => console.log(formState)}>
                  Check State
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>

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
    </>
  );
};

export default AddInventory;
