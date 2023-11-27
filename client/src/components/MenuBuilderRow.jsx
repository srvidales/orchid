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
      <select
        className="selectpicker"
        defaultValue={''}
        style={{ minWidth: '300px' }}
      >
        <option value="" disabled>
          {getSelectedMenuItem(Category)
            ? getSelectedMenuItem(Category).name
            : '---'}
        </option>
        <optgroup label={Category}>
          {menuItems
            .filter((item) => item.category === Category)
            .map((item) => (
              <option
                key={item._id}
                value={getSelectedMenuItem(Category)?._id === item._id}
              >
                {item.name}
              </option>
            ))}
        </optgroup>
      </select>
    );
  };

  // toLocaleDateString('en-US', {
  //     weekday: 'long',
  //   })

  return (
    <tr>
      <th scope="row">{`${new Date(dayOfWeek).toLocaleDateString('en-US', {
        weekday: 'long',
      })} ${new Date(dayOfWeek).toLocaleDateString()}`}</th>
      <td className="align-top">
        {getAvailableMenuItems('ENTREE')}
        {getAvailableMenuItems('SIDE')}
        {getAvailableMenuItems('DRINK')}
      </td>
      <td className="align-top">
        {getAvailableMenuItems('SNACK')}
        {getAvailableMenuItems('SNACK')}
      </td>
      <td className="align-top">
        {getAvailableMenuItems('ENTREE')}
        {getAvailableMenuItems('SIDE')}
        {getAvailableMenuItems('SIDE')}
        {getAvailableMenuItems('DRINK')}
      </td>
      <td className="align-top">
        <button className="btn btn-primary" type="button">
          Save
        </button>
      </td>
    </tr>
  );
}
