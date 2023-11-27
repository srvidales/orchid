import PropTypes from 'prop-types';

MenuBuilderRow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function MenuBuilderRow({ date, items }) {
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
          {items
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

  return (
    <tr>
      <th scope="row">{`${new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
      })} ${new Date(date).toLocaleDateString()}`}</th>
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
