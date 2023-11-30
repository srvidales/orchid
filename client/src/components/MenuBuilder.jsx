import { useState } from 'react';
import Calendar from 'react-calendar';
import MenuBuilderRow from './MenuBuilderRow';
import PropTypes from 'prop-types';
import './menuBuilder.css';

import AddInventory from './AddItem';

import { useQuery } from '@apollo/client';
import { GET_MENU_ITEMS_BY_SCHOOL_ID } from '../utils/queries';

MenuBuilder.propTypes = {
  schoolId: PropTypes.string.isRequired,
};

export default function MenuBuilder({ schoolId }) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().setHours(0, 0, 0, 0),
  );
  const { loading, data, error } = useQuery(GET_MENU_ITEMS_BY_SCHOOL_ID, {
    variables: { id: schoolId },
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="menu-container">
      <Calendar
        locale="en-US"
        calendarType="gregory"
        onChange={handleDateChange}
        value={new Date(selectedDate)}
        className="custom-calendar"
      />
      <br></br>
      <div className="col-sm-6 menuBuilder">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="col border border-dark-subtle">
            <div>
              <MenuBuilderRow
                schoolId={schoolId}
                date={new Date(selectedDate)}
                items={data.schoolById.menuItems}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
