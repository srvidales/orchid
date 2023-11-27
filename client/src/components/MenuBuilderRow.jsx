import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

MenuBuilderRow.propTypes = {
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

export default function MenuBuilderRow({ date, items }) {
  const selectKeyValuePairs = { ...defaultKeyValuePairs };
  
  const [selectValue, setSelectValue] = useState(selectKeyValuePairs);

  useEffect(() => {
    setSelectValue({ ...defaultKeyValuePairs });
  }, [date]);

  const handleChange = (id, event) => {
    const updatedSelectKeyValuePairs = { ...selectValue, [id]: event.target.value };
    setSelectValue(updatedSelectKeyValuePairs);
  };

  const renderSelect = (id, Category) => {
    return (
      <select
        id={id}
        className="selectpicker"
        style={{ minWidth: '300px' }}
        value={selectValue[id]}
        onChange={(event) => handleChange(id, event)}
      >
        <option value="" disabled>
          ---
        </option>
        <optgroup label={Category}>
          {items
            .filter((item) => item.category === Category)
            .map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
        </optgroup>
      </select>
    );
  };

  return (
    <tr>
      <th scope="row">{`${new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
      })} ${new Date(date).toLocaleDateString()}`}</th>
      <td className="align-top">
        {renderSelect('b1', 'ENTREE')}
        {renderSelect('b2', 'SIDE')}
        {renderSelect('b3', 'DRINK')}
      </td>
      <td className="align-top">
        {renderSelect('s1', 'SNACK')}
        {renderSelect('s2', 'SNACK')}
      </td>
      <td className="align-top">
        {renderSelect('l1', 'ENTREE')}
        {renderSelect('l2', 'SIDE')}
        {renderSelect('l3', 'SIDE')}
        {renderSelect('l4', 'DRINK')}
      </td>
      <td className="align-top">
        <button className="btn btn-primary" type="button">
          Save
        </button>
      </td>
    </tr>
  );
}
