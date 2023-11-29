import { useMutation } from '@apollo/client';
import { ADD_MENU_ITEM } from '../utils/mutations';
import React, { useState } from 'react';
import { Button, Form, FloatingLabel, Container, Row } from 'react-bootstrap';

const AddInventory = () => {
  const [addNewItem, { data, loading }] = useMutation(ADD_MENU_ITEM);
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    category: '',
  });

  const [displayMessage, setDisplayMessage] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setFormState({ ...formState, [name]: value });
  };

  const clearForm = () => {
    setFormState({
      name: '',
      description: '',
      category: '',
    });
  };

  const addItem = async () => {
    if (!formState.name || !formState.description || !formState.category) {
      setDisplayMessage('Please fill out all fields.');
      setTimeout(() => {
        setDisplayMessage('');
      }, 10000);
      return;
    }

    // Placeholder function for adding an item (replace with our logic)
    const data = await addNewItem({
      variables: {
        name: formState.name,
        description: formState.description,
        category: formState.category,
      },
    });
    console.log(data);
    clearForm();
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

  // // Placeholder function, replace with our actual logic to add an item
  // const addNewItem = (itemData) => {
  //   // Perform the action to add an item (make the API call, update state)
  //   console.log('Adding item:', itemData);
  // };

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
            <FloatingLabel controlId="name" label="Item Name" className="mb-3">
              <Form.Control
                type="text"
                value={formState.name}
                onChange={handleChange}
                name="name"
              />
            </FloatingLabel>

            <div>
              <Form.Select
                value={formState.description}
                name="description"
                onChange={handleChange}
              >
                <option value="">Please Choose a Meal Time</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
              </Form.Select>

              <Form.Select
                value={formState.category}
                name="category"
                onChange={handleChange}
              >
                <option value="">Category</option>
                <option value="ENTREE">Entree</option>
                <option value="SIDE">Side</option>
                <option value="DRINK">Drink</option>
                <option value="SNACK">Snack</option>
              </Form.Select>

              <div className="d-inline-block mx-3">
                <Button onClick={clearForm}>Clear Added Item</Button>
                <Button onClick={addItem}>Submit Added Item</Button>
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
