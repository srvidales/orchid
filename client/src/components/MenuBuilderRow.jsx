import PropTypes from 'prop-types';

MenuBuilderRow.propTypes = {
  dayOfWeek: PropTypes.number.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function MenuBuilderRow({ dayOfWeek, menuItems }) {
  const getSelectedMenuItem = () => {
    // category
    return null;
  };

  const getAvailableMenuItems = (Category) => {
    return (
      <optgroup label={Category}>
        {menuItems
          .filter((item) => item.category === Category)
          .map((item) => (
            <option
              key={item._id}
              selected={getSelectedMenuItem(Category)?._id === item._id}
            >
              {item.name}
            </option>
          ))}
      </optgroup>
    );
  };

  return (
    <tr>
      <th scope="row">{new Date(dayOfWeek).toLocaleDateString()}</th>
      <td className="align-top">
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('ENTREE')
              ? getSelectedMenuItem('ENTREE').name
              : '---'}
          </option>
          {getAvailableMenuItems('ENTREE')}
        </select>
        <br />
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('SIDE')
              ? getSelectedMenuItem('SIDE').name
              : '---'}
          </option>
          {getAvailableMenuItems('SIDE')}
        </select>
        <br />
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('DRINK')
              ? getSelectedMenuItem('DRINK').name
              : '---'}
          </option>
          {getAvailableMenuItems('DRINK')}
        </select>
      </td>
      <td className="align-top">
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('SNACK')
              ? getSelectedMenuItem('SNACK').name
              : '---'}
          </option>
          {getAvailableMenuItems('SNACK')}
        </select>
        <br />
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('SNACK')
              ? getSelectedMenuItem('SNACK').name
              : '---'}
          </option>
          {getAvailableMenuItems('SNACK')}
        </select>
        <br />
      </td>
      <td className="align-top">
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('ENTREE')
              ? getSelectedMenuItem('ENTREE').name
              : '---'}
          </option>
          {getAvailableMenuItems('ENTREE')}
        </select>
        <br />
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('SIDE')
              ? getSelectedMenuItem('SIDE').name
              : '---'}
          </option>
          {getAvailableMenuItems('SIDE')}
        </select>
        <br />
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('SIDE')
              ? getSelectedMenuItem('SIDE').name
              : '---'}
          </option>
          {getAvailableMenuItems('SIDE')}
        </select>
        <br />
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('DRINK')
              ? getSelectedMenuItem('DRINK').name
              : '---'}
          </option>
          {getAvailableMenuItems('DRINK')}
        </select>
        <br />
      </td>
      <td className="align-top">
        <button className="btn btn-primary" type="button">
          Save
        </button>
      </td>
    </tr>
  );
}
