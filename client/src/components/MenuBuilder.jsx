import { useState } from 'react';
import Calendar from 'react-calendar';
import MenuBuilderRow from './MenuBuilderRow';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';
import { GET_MENU_ITEMS_BY_SCHOOL_ID } from '../utils/queries';

MenuBuilder.propTypes = {
  schoolId: PropTypes.string.isRequired,
};

export default function MenuBuilder({ schoolId }) {
  const [value, onChange] = useState(new Date().setHours(0, 0, 0, 0));
  const { loading, data, error } = useQuery(GET_MENU_ITEMS_BY_SCHOOL_ID, {
    variables: { id: schoolId },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Calendar
              locale="en-US"
              calendarType="gregory"
              onChange={onChange}
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
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  <MenuBuilderRow
                    date={new Date(value)}
                    items={data.schoolById.menuItems}
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
