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
        ...formState,
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

  return (
    <>
      <Container style={{ maxWidth: '90%' }}>
        <Row
          className="d-inline-block mx-3 my-3"
          style={{
            display: 'inline-block',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1%',
          }}
        >
          <div>
            <h4>Add Menu Item</h4>
            <FloatingLabel controlId="name" label="Item Name" className="mb-3">
              <Form.Control
                type="text"
                value={formState.name}
                onChange={handleChange}
                name="name"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="name"
              label="Item Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                value={formState.description}
                onChange={handleChange}
                name="description"
              />
            </FloatingLabel>
            <div>
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
              <div className="d-inline-block mx-3 my-3">
                <Button onClick={clearForm}>Clear Added Item</Button>
                <Button onClick={addItem}>Submit Added Item</Button>
                {/* <Button onClick={() => console.log(formState)}>
                  Check State
                </Button> */}
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
