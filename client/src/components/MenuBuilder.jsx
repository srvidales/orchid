import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import MenuBuilderDailyRow from './MenuBuilderRow';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS_BY_SCHOOL_DATE } from '../utils/queries';

MenuBuilder.propTypes = {
  schoolId: PropTypes.string.isRequired,
  selectedDate: PropTypes.Date,
};

function setToMidnight(date) {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

// const schoolId = '656153dc5bb5fb697f1dc45f';

export default function MenuBuilder({ schoolId, selectedDate }) {
  const [menuItems, setMenuItems] = useState([]);
  const [value, onChange] = useState(setToMidnight(new Date()));
  console.log(value.toISOString());
  const {
    loadingDailyMenusBySchoolAndDate,
    dailyMenusBySchoolAndDateData,
    dailyMenusBySchoolAndDateError,
  } = useQuery(GET_DAILY_MENUS_BY_SCHOOL_DATE, {
    variables: {
      schoolId: schoolId,
      date: new Date(value),
    },
  });

  useEffect(() => {
    if (dailyMenusBySchoolAndDateData) {
      setMenuItems(dailyMenusBySchoolAndDateData);
    }
  }, [dailyMenusBySchoolAndDateData]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm d-flex justify-content-center">
            <Calendar
              locale="en-US"
              calendarType="gregory"
              onChange={onChange}
              value={value}
            />
          </div>
          <div className="col-sm d-flex align-items-center">
            {loadingDailyMenusBySchoolAndDate ? (
              <div>Loading...</div>
            ) : (
              <div>
                <label htmlFor="menu">Menu</label>
                <textarea
                  rows={10}
                  cols={35}
                  value={
                    JSON.stringify(dailyMenusBySchoolAndDateData) ||
                    dailyMenusBySchoolAndDateError
                  }
                ></textarea>
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
                    <MenuBuilderDailyRow
                      dayOfWeek={`${value.toLocaleDateString('en-US', {
                        weekday: 'long',
                      })} ${value.toLocaleDateString()}`}
                      menuItems={menuItems}
                    />
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
