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
    console.log(name, value);
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
            <div className="d-inline-block mx-2">
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
            </div>

            <div className="d-inline-block mx-2">
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
            </div>

            <div>
              <Button>Clear Added Item</Button>
              <Button>Submit Added Item</Button>
              <Button onClick={() => console.log(formState)}>
                Check State
              </Button>
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
