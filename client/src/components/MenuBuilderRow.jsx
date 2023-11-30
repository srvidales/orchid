import { useState } from 'react';
import PropTypes from 'prop-types';
import { CREATE_SCHOOL_DAILY_MENU } from '../utils/mutations';
import { useMutation } from '@apollo/client';

MenuBuilderRow.propTypes = {
  schoolId: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

export default function MenuBuilderRow({ schoolId, date, items }) {
  const [createDailyMenu, { loading, error }] = useMutation(
    CREATE_SCHOOL_DAILY_MENU,
  );

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSaveClick = async () => {
    if (Object.values(selectValue).every((value) => value !== '')) {
      await newDailyMenu('BREAKFAST', [
        selectValue.b1,
        selectValue.b2,
        selectValue.b3,
      ]);
      await newDailyMenu('SNACK', [selectValue.s1, selectValue.s2]);
      await newDailyMenu('LUNCH', [
        selectValue.l1,
        selectValue.l2,
        selectValue.l3,
      ]);
      
      setShowSuccessPopup(true);
      setTimeout(() => {
        resetForm();
        setShowSuccessPopup(false);
      }, 2000); 
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000); 
    }
  };

  const selectKeyValuePairs = { ...defaultKeyValuePairs };
  const [selectValue, setSelectValue] = useState(selectKeyValuePairs);

  const handleChange = (id, event) => {
    const updatedSelectKeyValuePairs = {
      ...selectValue,
      [id]: event.target.value,
    };
    setSelectValue(updatedSelectKeyValuePairs);
  };

  const renderSection = (title, ids, category) => (
    <div className="menu-section" style={{ marginBottom: '20px' }}>
      <h3>{title}</h3>
      <div className="menu-options">
        {ids.map((id) => (
          <div key={id} className="select-wrapper">
            {renderSelect(id, category)}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSelect = (id, category) => (
    <select
      key={id}
      id={id}
      className="selectpicker"
      style={{ minWidth: '300px' }}
      value={selectValue[id]}
      onChange={(event) => handleChange(id, event)}
    >
      <option value="" disabled>
        ---
      </option>
      {category.map((data) => (
        <optgroup label={data}>
          {items
            .filter((item) => {
              console.log(data, item.category);
              return item.category === data;
            })
            .map((item) => {
              console.log(item);
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
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
      {renderSection(
        'Breakfast',
        ['b1', 'b2', 'b3'],
        ['ENTREE', 'SIDE', 'DRINK'],
      )}
      {renderSection('Snack', ['s1', 's2'], ['SNACK', 'DRINK'])}
      {renderSection(
        'Lunch',
        ['l1', 'l2', 'l3', 'l4'],
        ['ENTREE', 'SIDE', 'DRINK'],
      )}
      <div className="save-button">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSaveClick}
        >
          Save
          </button>
        {showError && (
          <div className="error-popup">
            <p style={{ color: 'red' }}>Please select an item for every menu category!</p>
          </div>
        )}
        {showSuccessPopup && (
          <div className="success-popup">
            <p style={{ color: 'green' }}>Menu Successfully Updated!</p>
          </div>
        )}
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

  function resetForm() {
    setShowSuccessPopup(false);
    setShowError(false);
    setSelectValue(defaultKeyValuePairs);
  }
}
