import { useState } from 'react';
import PropTypes from 'prop-types';
import { CREATE_SCHOOL_DAILY_MENU } from '../utils/mutations';
import { useMutation } from '@apollo/client';

MenuBuilderRow.propTypes = {
  schoolId: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function MenuBuilderRow({ schoolId, date, items }) {
  const [createDailyMenu, { loading, error }] = useMutation(
    CREATE_SCHOOL_DAILY_MENU,
  );

  const defaultKeyValuePairs = {
    b1: '',
    b2: '',
    b3: '',
    s1: '',
    s2: '',
    l1: '',
    l2: '',
    l3: '',
    l4: '',
  };

  const [breakfast, setBreakfast] = useState({ ...defaultKeyValuePairs });
  const [snack, setSnack] = useState({ ...defaultKeyValuePairs });
  const [lunch, setLunch] = useState({ ...defaultKeyValuePairs });

  const handleSaveClick = async () => {
    if (
      Object.values(breakfast).every((value) => value !== '') &&
      Object.values(snack).every((value) => value !== '') &&
      Object.values(lunch).every((value) => value !== '')
    ) {
      await newDailyMenu('BREAKFAST', [
        breakfast.b1,
        breakfast.b2,
        breakfast.b3,
      ]);
      await newDailyMenu('SNACK', [snack.s1, snack.s2]);
      await newDailyMenu('LUNCH', [lunch.l1, lunch.l2, lunch.l3]);
    } else {
      alert('Please select an item for each menu item.');
    }
  };

  const handleChange = (mealType, id, event) => {
    const updatedSelectKeyValuePairs = {
      ...mealType,
      [id]: event.target.value,
    };

    switch (mealType) {
      case 'breakfast':
        setBreakfast(updatedSelectKeyValuePairs);
        break;
      case 'snack':
        setSnack(updatedSelectKeyValuePairs);
        break;
      case 'lunch':
        setLunch(updatedSelectKeyValuePairs);
        break;
      default:
        break;
    }
  };

  const renderSection = (title, ids, categories, mealType) => (
    <div className="menu-section" style={{ marginBottom: '20px' }}>
      <h3>{title}</h3>
      <div className="menu-options">
        {ids.map((id, index) => (
          <div key={id} className="select-wrapper">
            {renderSelect(id, [categories[index]], mealType)}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSelect = (id, category, mealType) => (
    <select
      key={id}
      id={id}
      className="selectpicker"
      style={{ minWidth: '300px' }}
      value={mealType[id]}
      onChange={(event) => handleChange(mealType, id, event)}
    >
      <option value="--------------">
        ---
      </option>
      {category.map((data) => (
        <optgroup label={data} key={data}>
          {items
            .filter((item) => item.category === data)
            .map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
        </optgroup>
      ))}
    </select>
  );

  return (
    <div className="menu-builder-row">
      <div className="date-info">
        <p>
          {`${new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
          })} ${new Date(date).toLocaleDateString()}`}
        </p>
      </div>
      {renderSection('Breakfast', [1, 2], ['ENTREE', 'DRINK'], breakfast)}
      {renderSection('Snack', [1], ['SNACK'], snack)}
      {renderSection('Lunch', [1, 2, 3], ['ENTREE', 'SIDE', 'DRINK'], lunch)}
      <div className="save-button">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSaveClick}
        >
          Save
        </button>
        {loading ? <p>Saving...</p> : null}
      </div>
    </div>
  );

  async function newDailyMenu(meal, menuItems) {
    try {
      const response = await createDailyMenu({
        variables: {
          input: {
            schoolId,
            date,
            meal,
            menuItems,
          },
        },
      });

      console.log('Create successful', response.data);
    } catch (err) {
      console.error('Error creating daily menu', err);
    }
  }
}
