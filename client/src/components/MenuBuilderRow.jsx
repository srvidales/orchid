import PropTypes from 'prop-types';

MenuBuilderRow.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  availableMenuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function MenuBuilderRow({ dayOfWeek, availableMenuItems }) {
  const getSelectedMenuItem = (category) => {
    // Logic to find the selected menu item from the database for the given category
    // Return the menu item or null if not found
  };

  return (
    <tr>
      <th scope="row">{dayOfWeek}</th>
      <td className="align-top">
        <select className="selectpicker">
          <option value="" disabled selected>
            {getSelectedMenuItem('Entree')
              ? getSelectedMenuItem('Entree').name
              : '---'}
          </option>
          <optgroup label="Entree">
            {availableMenuItems
              .filter((item) => item.category === 'Entree')
              .map((item) => (
                <option
                  key={item._id}
                  selected={getSelectedMenuItem('Entree')?._id === item._id}
                >
                  {item.name}
                </option>
              ))}
          </optgroup>
        </select>
        <br />
        <select className="selectpicker">
          <optgroup label="Side">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
        </select>
        <br />
        <select className="selectpicker">
          <optgroup label="Drink">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
        </select>
      </td>
      <td className="align-top">
        <select className="selectpicker">
          <optgroup label="Snack">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
        </select>
        <br />
        <select className="selectpicker">
          <optgroup label="Snack">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
        </select>
        <br />
      </td>
      <td className="align-top">
        <select className="selectpicker">
          <optgroup label="Entree">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
        </select>
        <br />
        <select className="selectpicker">
          <optgroup label="Side">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
        </select>
        <br />
        <select className="selectpicker">
          <optgroup label="Side">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
        </select>
        <br />
        <select className="selectpicker">
          <optgroup label="Drink">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
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
