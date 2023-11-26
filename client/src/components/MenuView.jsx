import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';


export default function MenuView() {
  const [currentWeek, setCurrentWeek] = useState('');

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Find the start date of the current week (Sunday)
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());

    // Find the end date of the current week (Saturday)
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

    // Format the dates as "MM/DD/YY"
    const formattedStartDate = `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}/${startDate.getFullYear() % 100}`;

    const formattedEndDate = `${endDate.getMonth() + 1}/${endDate.getDate()}/${
      endDate.getFullYear() % 100
    }`;

    // Set the current week string
    setCurrentWeek(`${formattedStartDate} - ${formattedEndDate}`);
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <h2>Menu View</h2>
      <h4>Current Week: {currentWeek}</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> Monday</th>
            <th scope="col"> Tuesday</th>
            <th scope="col"> Wednesday</th>
            <th scope="col"> Thursday</th>
            <th scope="col"> Friday</th>
          </tr>
        </thead>
      </table>
    </>
  );
}
