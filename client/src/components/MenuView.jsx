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

  console.log('From the Query:', data);

  // Check for errors and log them if present
  if (error) {
    console.error('Error fetching data:', error);
  }

  // Extract daily menu data or default to an empty array
  const dailyMenuDataSchool = data?.dailyMenusBySchool || {};
  const dailyMenuData = dailyMenuDataSchool?.dailyMenus || [];

  const groupedData = Object.groupBy(dailyMenuData, ({ date }) => date);
  console.log('Daily Menu Data:', groupedData);

  // Filter out weekends (Saturday and Sunday)
  const filterWeekdays = (menu) => {
    const dayOfWeek = new Date(menu).getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6; // 0 is Sunday, 6 is Saturday
  };

  // Use the filter function to get only weekdays
  const weekdaysOnly = Object.keys(groupedData).filter(filterWeekdays);
  console.log('Weekdays Only:', weekdaysOnly);

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

    return `${startOfWeek.toLocaleDateString(
      'en-US',
    )} - ${endOfWeek.toLocaleDateString('en-US')}`;
  };

  // Get the current week's date range
  const currentWeek = getCurrentWeek();

  // Render menu items for a given date
  const renderMenuItems = (dateKey) => {
    const dateObject = new Date(dateKey);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
    }).format(dateObject);

    // Styles for the container and date heading
    const containerStyle = {
      minWidth: '125px',
      width: '18%',
      marginBottom: '20px',
      padding: '10px',
      marginRight: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    };

    const dateHeadingStyle = {
      fontSize: '1.2em',
      marginBottom: '10px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };

    return (
      <div style={containerStyle} className="border">
        <div>
          <h2 className="text-center" style={dateHeadingStyle}>
            {formattedDate}
          </h2>
        </div>
        <div>
          {groupedData[dateKey].map((dayData, index) => 
          (
            <div key={index} className="text-center">
              <div style={{ marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1em' }}>{dayData.meal}</h3>
                <p style={{ fontSize: '0.9em' }}>{dayData.menuItems[0].name}</p>
              </div>
            </div>
          )
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '10px',
          margin: '10px',
        }}
      >
        Weekly Menu
      </h1>
      <h2
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '10px',
          margin: '17px',
        }}
      >
        {currentWeek}
      </h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {weekdaysOnly
          .filter((dateKey) => {
            console.log('dkey',dateKey);
            const dateObject = new Date(dateKey);
            const start = new Date(currentWeek.split('-')[0]);
            const end = new Date(currentWeek.split('-')[1]);

            // console.log(new Date(currentWeek.split('-')[0]));
            // console.log('dateobj', dateObject.getTime() / 1000);
            return (
              dateObject.getTime() / 1000 >= start.getTime() / 1000 &&
              dateObject.getTime() / 1000 <= end.getTime() / 1000
            );
          })
          .sort((a, b) => new Date(a) - new Date(b))
          .map( renderMenuItems)}
      </div>
    </>
  );
});
