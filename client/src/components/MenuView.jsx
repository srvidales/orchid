import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS_BY_SCHOOL } from '../utils/queries';

export default function MenuView() {
  // State variables
  const [currentWeek, setCurrentWeek] = useState('');
  const [weekdays, setWeekdays] = useState([]);
  const [dates, setDates] = useState([]);
  const [menuData, setMenuData] = useState([]);

  // GraphQL hook to fetch data
  const { data, loading, error } = useQuery(GET_DAILY_MENUS_BY_SCHOOL, {
    variables: { schoolId: '6563aef4c239cd4e485649e2' },
  });

  console.log('data from query', data);

  // Update the week-related and menu item information when the data changes
  useEffect(() => {
    const fetchData = async () => {
      // Check if data is available
      if (data && data.dailyMenusBySchool) {
        // Extract daily menus from the fetched data
        const dailyMenus = data.dailyMenusBySchool;

        // Calculate the current week
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(
          currentDate.getDate() -
            currentDate.getDay() +
            (currentDate.getDay() === 0 ? 1 : -6),
        );

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 4);

        const formattedStartDate = `${
          startOfWeek.getMonth() + 1
        }/${startOfWeek.getDate()}/${startOfWeek.getFullYear() % 100}`;
        const formattedEndDate = `${
          endOfWeek.getMonth() + 1
        }/${endOfWeek.getDate()}/${endOfWeek.getFullYear() % 100}`;

        setCurrentWeek(`${formattedStartDate} - ${formattedEndDate}`);

        // Create an array of formatted day names for each weekday (Monday to Friday)
        const formattedDays = [];
        // Create an array of formatted dates for each weekday (Monday to Friday)
        const formattedDates = [];

        // Loop through each day of the week (Monday to Friday)
        for (let i = 0; i < 5; i++) {
          // Create a new Date object starting from the provided Monday
          const date = new Date(startOfWeek);
          // Increment the date to represent each day of the week
          date.setDate(startOfWeek.getDate() + i);

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

        // Create an array to hold the menu data for each day
        const menuDataByDay = [];

        // Loop through each day of the week (Monday to Friday)
        for (let i = 0; i < 5; i++) {
          // Find the corresponding DailyMenu for the current date
          const dailyMenuForDay = dailyMenus.find(
            (menu) =>
              new Date(menu.date).toDateString() ===
              new Date(formattedDates[i]).toDateString(),
          );

          // Check if a DailyMenu was found for the current date
          if (dailyMenuForDay) {
            // Extract menu items for the current day
            const menuItems = dailyMenuForDay.menuItems.map((menuItem) => ({
              name: menuItem.name,
              description: menuItem.description,
              category: menuItem.category,
            }));

            // Push the date and menu items to the menuDataByDay array
            menuDataByDay.push({
              date: formattedDates[i],
              items: menuItems,
            });
          } else {
            // If no DailyMenu was found for the current date, push an empty entry
            menuDataByDay.push({
              date: formattedDates[i],
              items: [],
            });
          }
        }
        console.log('menuDataByDay:', menuDataByDay);
        // Set the menuData state variable with the menuDataByDay array
        setMenuData(menuDataByDay);
      }
    };

    fetchData();
  }, [data, loading]);

  // Return JSX
  return (
    <>
      <h2>Menu View</h2>
      <h4>Current Week: {currentWeek}</h4>
      <table className="table">
        <thead>
          <tr>
            {/* Render weekdays */}
            {weekdays.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render menu items for each day */}
          {menuData.map((dayData, dayIndex) => (
            <React.Fragment key={dayIndex}>
              <tr>
                <td colSpan={5} style={{ textAlign: 'center' }}>
                  {dayData.date}
                </td>
              </tr>
              {['BREAKFAST', 'LUNCH', 'SNACK'].map(
                (category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td colSpan={5} style={{ textAlign: 'center' }}>
                        <strong>{category}</strong>
                      </td>
                    </tr>
                    {dayData.items
                      .filter((item) => item.category === category)
                      .map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td colSpan={5} style={{ textAlign: 'center' }}>
                            {item.name}
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ),
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}
