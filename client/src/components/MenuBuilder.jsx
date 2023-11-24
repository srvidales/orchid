import { useState } from 'react';
import Calendar from 'react-calendar';
import MenuBuilderDailyRow from './MenuBuilderRow';

import { useQuery } from '@apollo/client';
import {
  GET_SCHOOL,
  GET_MENU_ITEMS_BY_SCHOOL,
  GET_DAILY_MENUS_BY_SCHOOL_DATE,
} from '../utils/queries';

function setToMidnight(date) {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

const schoolId = '6560769abcf9a73f6af407f0';

export default function MenuBuilder() {
  // function formatDate(date) {
  //   const timeZone = 'America/Los_Angeles'; // Specify the time zone
  //   const formattedDate = new Intl.DateTimeFormat('en-US', {
  //     timeZone,
  //     dateStyle: 'full',
  //     timeStyle: 'long'
  //   }).format(date);
  //   return formattedDate;
  // }

  const {
    loadingGetMenuItemsBySchool,
    getMenuItemsBySchoolData,
    getMenuItemsBySchoolError,
  } = useQuery(GET_MENU_ITEMS_BY_SCHOOL, {
    variables: {
      schoolId: schoolId,
    },
  });

  const {l, d, e } = useQuery(GET_SCHOOL)

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

//${formatDate(new Date(value))}
