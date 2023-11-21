import PropTypes from 'prop-types';

MenuBuilderRow.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
};

export default function MenuBuilderRow({dayOfWeek}) {
  return (
    <tr>
      <th scope="row">{dayOfWeek}</th>
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
          <optgroup label="Snack">
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
          <optgroup label="Snack">
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
