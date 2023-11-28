import { memo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS_BY_SCHOOL } from '../utils/queries';

export default memo(function MenuView({ schoolId }) {
  const { data, error } = useQuery(GET_DAILY_MENUS_BY_SCHOOL, {
    variables: { schoolId },
  });

  const dailyMenuData = data?.dailyMenusBySchool || [];
  const MenusByDate = Object.groupBy(dailyMenuData, ({ date }) => {
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  });

  const filterWeekdays = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5; // Monday (1) to Friday (5)
  };

  const weekdayKeysArray = Object.keys(MenusByDate).filter(filterWeekdays);

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

  // Get the current week's date range
  const currentWeek = getCurrentWeek();

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
