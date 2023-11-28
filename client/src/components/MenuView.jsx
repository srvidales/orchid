import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS } from '../utils/queries';

// Component to display daily menus
export default function MenuView() {
  // GraphQL hook to fetch data
  const { data, loading, error } = useQuery(GET_DAILY_MENUS);

  // Extract daily menu data or default to an empty array
  const dailyMenuData = data?.dailyMenus || [];

  // Group daily menu data by date using a custom utility function
  const result = Object.groupBy(dailyMenuData, ({ date }) => date);
  console.log('data from query', result);

  // Get an array of keys (dates) from the grouped result
  const objectKeyArry = Object.keys(result);
  console.log(result);

  // Return JSX
  return (
    <>
      <h1 className="text-center mt-4 mb-4">Menu View</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {/* Iterate over each date in the grouped result */}
        {objectKeyArry.map((item) => (
          <div style={{ minWidth: '125px', width: '18%', marginBottom: '20px', padding: '10px', marginRight: '10px' }} className="border" key={item}>
            <div>
              {/* Display the date as a heading */}
              <h2 className="text-center" style={{ fontSize: '1.2em', marginBottom: '10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</h2>
            </div>
            {/* Use div for the body instead of tbody */}
            <div>
              {/* Iterate over each day's data for the current date */}
              {result[item].map((dayData, index) => (
                <div key={index} className="text-center">
                  <div style={{ marginBottom: '10px' }}>
                    {/* Display the meal type as a sub-heading */}
                    <h3 style={{ fontSize: '1em', margin: '0' }}>{dayData.meal}</h3>
                    {/* Display the first menu item for the current meal */}
                    <p style={{ fontSize: '0.9em', margin: '0' }}>{dayData.menuItems[0].name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
