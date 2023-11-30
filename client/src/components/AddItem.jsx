import { useMutation } from '@apollo/client';
import { ADD_MENU_ITEM } from '../utils/mutations';
import React, { useState } from 'react';
import { Button, Form, FloatingLabel, Container, Row } from 'react-bootstrap';

const AddInventory = ({ schoolId }) => {
  const [addNewItem, { data, loading, error }] = useMutation(ADD_MENU_ITEM);
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    category: '',
  });

  const [displayMessage, setDisplayMessage] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
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
    // Validate form fields
    if (!formState.name || !formState.description || !formState.category) {
      setDisplayMessage('Please fill out all fields.');
      setTimeout(() => {
        setDisplayMessage('');
      }, 10000);
      return;
    }

    try {
      // Trigger the mutation
      const { data: mutationData } = await addNewItem({
        variables: { ...formState, schoolId },
      });

      // Access data from the mutation result
      const resultData = mutationData && mutationData.addMenuItem;

      // Clear the form and update UI as needed
      clearForm();
      setDisplayMessage('Success in adding an item!');

      // Reset the success message after 10 seconds
      setTimeout(() => {
        setDisplayMessage('');
      }, 10000);

      // Reload the page after successful addition
      window.location.reload();
    } catch (error) {
      // Handle error from the mutation
      console.error('Mutation Error:', error);
      setDisplayMessage('Unable to add item');

      // Reset the success message after 10 seconds
      setTimeout(() => setDisplayMessage(''), 10000);
    }
  };

  return (
    <>
      <Container style={{ alignItems: 'center' }} className="mx-auto">
        <Row
          className="d-inline-block mx-3"
          style={{
            display: 'inline-block',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1%',
          }}
        >
          <div>
            <h3 style={{ margin: '30px' }}>Add Menu Item</h3>
            <FloatingLabel
              controlId="name"
              label="Name of food"
              className="mb-3"
            >
              <Form.Control
                type="text"
                value={formState.name}
                onChange={handleChange}
                name="name"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="name"
              label="Describe the food"
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
                className="mb-3"
                onChange={handleChange}
              >
                <option value="">Select a Menu Item Type</option>
                <option value="ENTREE">Entree</option>
                <option value="SIDE">Side</option>
                <option value="DRINK">Drink</option>
                <option value="SNACK">Snack</option>
              </Form.Select>
              <div className="d-inline-block mx-3">
                <Button onClick={clearForm}>Clear Added Item</Button>
                <Button onClick={addItem}>Submit Added Item</Button>
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
