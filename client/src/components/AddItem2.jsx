import { useState } from 'react';
import {
  Button,
  Form,
  FloatingLabel,
  Dropdown,
  Container,
  Row,
} from 'react-bootstrap';

const Item = () => {
  const [formState, setFormState] = useState({
    item_name: '',
    mealChosen: '',
    course: '',
  });

  const [displayMessage, setDisplayMessage] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleDropdownEditorChange = (name, value) => {
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
  };

  return (
    <>
      <Container style={{ width: '50%' }}>
        <Row>
          <div
            style={{
              display: 'inline-block',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              padding: '1%',
            }}
          >
            <h2>Add Menu Item</h2>
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
            <p></p>

            <div className="d-inline-block mx-2">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Option
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => handleDropdownEditorChange('option', 'add')}
                    href="#/action-1"
                  >
                    Add
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      handleDropdownEditorChange('option', 'update')
                    }
                    href="#/action-1"
                  >
                    Update
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      handleDropdownEditorChange('option', 'remove')
                    }
                    href="#/action-1"
                  >
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="d-inline-block mx-2">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Meal
                </Dropdown.Toggle>
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

export default Item;
