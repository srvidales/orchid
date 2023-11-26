import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

export default function MenuView() {
  const [currentWeek, setCurrentWeek] = useState('');
  const [weekdays, setWeekdays] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Find the start date of the current week (Monday)
    const startDate = new Date(currentDate);
    startDate.setDate(
      currentDate.getDate() -
        currentDate.getDay() +
        (currentDate.getDay() === 0 ? -6 : 1),
    );

    // Find the end date of the current week (Friday)
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    // Format the dates as "MM/DD/YY"
    const formattedStartDate = `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}/${startDate.getFullYear() % 100}`;

    const formattedEndDate = `${endDate.getMonth() + 1}/${endDate.getDate()}/${
      endDate.getFullYear() % 100
    }`;

    // Set the current week string
    setCurrentWeek(`${formattedStartDate} - ${formattedEndDate}`);

    // Create an array of formatted day names for each weekday (Monday to Friday)
    const formattedDays = [];
    // Create an array of formatted dates for each weekday (Monday to Friday)
    const formattedDates = [];

    // Loop through each day of the week (Monday to Friday)
    for (let i = 0; i < 5; i++) {
      // Create a new Date object starting from the provided Monday
      const date = new Date(startDate);
      // Increment the date to represent each day of the week
      date.setDate(startDate.getDate() + i);

      // Get the full day name using the 'en-US' locale
      const dayName = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
      }).format(date);

      // Format the date as MM/DD/YY
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${
        date.getFullYear() % 100
      }`;

      // Push the day name and formatted date to their respective arrays
      formattedDays.push(dayName);
      formattedDates.push(formattedDate);
    }

    setWeekdays(formattedDays);
    setDates(formattedDates);
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <h2>Menu View</h2>
      <h4>Current Week: {currentWeek}</h4>
      <table className="table">
        <thead>
          <tr>
            {weekdays.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
          <tr>
            {dates.map((date, index) => (
              <td key={index}>{date}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Row for breakfast items */}
          <tr className="breakfast-row">
            <td colSpan="5">
              <h6>Breakfast</h6>
              <table className="sub-table">
                <tbody>
                  <tr>
                    <td>Item 1</td>
                  </tr>
                  <tr>
                    <td>Item 2</td>
                  </tr>
                  <tr>
                    <td>Item 3</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
