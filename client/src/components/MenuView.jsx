import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS } from '../utils/queries';

export default function MenuView() {
  // State variables
  const [currentWeek, setCurrentWeek] = useState('');

  // GraphQL hook to fetch data
  const { data, loading, error } = useQuery(GET_DAILY_MENUS);

  const dailyMenuData = data?.dailyMenus || [];
  const result = Object.groupBy(dailyMenuData, ({ date }) => date);
  // console.log('data from query', result);
  const objectKeyArry = Object.keys(result);
  // console.log(result)

  // Return JSX
  return (
    <>
      <h2>Menu View</h2>
      <h4>Current Week: {currentWeek}</h4>
      <div className="d-flex flex-wrap ">
        {objectKeyArry.map((item) => (
          <div style={{ width: '18%' }} className="border ">
            <thead>
              <tr>
                <th>{item}</th>
                {/* Render weekdays */}
                {/* {weekdays.map((day, index) => (
              <th key={index}>{day}</th>
            ))} */}
              </tr>
            </thead>
            <tbody>
              {result[item].map((dayData) => (
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <h4>{dayData.meal}</h4>
                    <p>{dayData.menuItems[0].name}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        ))}
      </div>
    </>
  );
}
