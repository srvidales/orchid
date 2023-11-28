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

  return (
    <>
      <h1 className="text-center mt-4 mb-4">Menu View</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {weekdayKeysArray.map((dateKey) => (
          <div
            style={{
              minWidth: '125px',
              width: '18%',
              marginBottom: '20px',
              padding: '10px',
              marginRight: '10px',
            }}
            className="border"
            key={dateKey}
          >
            <div>
              <h2
                className="text-center"
                style={{
                  fontSize: '1.2em',
                  marginBottom: '10px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {dateKey}
              </h2>
            </div>
            <div>
              {MenusByDate[dateKey].map((dayData, index) => (
                <div key={index} className="text-center">
                  <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1em', margin: '0' }}>
                      {dayData.meal}
                    </h3>
                    <p style={{ fontSize: '0.9em', margin: '0' }}>
                      {dayData.menuItems[0].name}
                    </p>
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
