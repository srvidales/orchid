import Calendar from 'react-calendar';
import MenuBuilderDailyRow from './MenuBuilderRow';

export default function MenuBuilder() {
  return (
    <>
      <h2>Menu Builder</h2>
      <div>
        <Calendar calendarType="US" />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              3 Items
              <br />
              Breakfast
            </th>
            <th scope="col">
              2 Items
              <br />
              Snack
            </th>
            <th scope="col">
              4 Items
              <br />
              Lunch
            </th>
          </tr>
        </thead>
        <tbody>
          <MenuBuilderDailyRow dayOfWeek='Monday'/>
          <MenuBuilderDailyRow dayOfWeek='Tuesday'/>
          <MenuBuilderDailyRow dayOfWeek='Wednesday'/>
          <MenuBuilderDailyRow dayOfWeek='Thursday'/>
          <MenuBuilderDailyRow dayOfWeek='Friday'/>
        </tbody>
      </table>
    </>
  );
}
