import { memo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS_BY_SCHOOL } from '../utils/queries';

// Component to display daily menus
export default memo(function MenuView({ schoolId }) {
  console.log('School ID Given:', schoolId);
  // GraphQL hook to fetch data
  const { data, error } = useQuery(GET_DAILY_MENUS_BY_SCHOOL, {
    variables: { schoolId },
  });

  console.log('#2', data);

  // Extract daily menu data or default to an empty array
  const dailyMenuData = data?.dailyMenusBySchool || [];

  // Group daily menu data by date using a custom utility function
  const MenusByDate = Object.groupBy(dailyMenuData, ({ date }) => {
    // Format the date using .toLocaleDateString()
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  });

  console.log('data from query', MenusByDate);

  // Get an array of keys (dates) from the grouped MenusByDate, filtering out weekends
  const filterWeekdays = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5; // Monday (1) to Friday (5)
  };

  const weekdayKeysArray = Object.keys(MenusByDate).filter(filterWeekdays);

  // Create a function to format the current week in mm/dd/yy - mm/dd/yy
  const getCurrentWeek = () => {
    const today = new Date();
    
    const startOfWeek = new Date(
      today.setDate(
        today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1),
      ),
    );

    const endOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 5),
    );

    return `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
  };

  return (
    <>
      <h1>Menu View</h1>
      <h2>Current Week:</h2>
      <h3>{getCurrentWeek()}</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {weekdayKeysArray.map((dateKey) => (
          <div style={{ width: '18%' }} className="border" key={dateKey}>
            <div>
              <h3>{dateKey}</h3>
            </div>
            <div>
              {MenusByDate[dateKey].map((dayData, index) => (
                <div key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <h4>{dayData.meal}</h4>
                    <p>{dayData.menuItems[0].name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
