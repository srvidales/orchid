import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import MenuBuilderDailyRow from './MenuBuilderRow';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';
import { GET_MENU_ITEMS_BY_SCHOOL_ID } from '../utils/queries';

MenuBuilder.propTypes = {
  schoolId: PropTypes.string.isRequired,
  // selectedDate: PropTypes.Date,
};

export default function MenuBuilder({ schoolId }) {
  const [menuItems, setMenuItems] = useState([]);
  const [value, onChange] = useState(new Date().setHours(0, 0, 0, 0));
  const { loading, data, error } = useQuery(GET_MENU_ITEMS_BY_SCHOOL_ID, {
    variables: { id: schoolId },
  });

  useEffect(() => {
    if (data) {
      setMenuItems(data);
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Calendar
              locale="en-US"
              calendarType="gregory"
              onChange={onChange}
              value={value}
            />
          </div>
          <div className="col-sm">
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
                  <th />
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <MenuBuilderDailyRow
                    dayOfWeek={value}
                    menuItems={data.schoolById.menuItems}
                  />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

// value.toLocaleDateString('en-US', {
//   weekday: 'long',
// })

// ${value.toLocaleDateString()}
