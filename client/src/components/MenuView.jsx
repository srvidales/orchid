import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS_BY_SCHOOL_AND_DATE } from '../utils/queries';

export default function MenuView() {
  // State variables
  const [currentWeek, setCurrentWeek] = useState('');
  const [weekdays, setWeekdays] = useState([]);
  const [dates, setDates] = useState([]);
  const [meals, setMeals] = useState([]);

  // GraphQL query to get daily menus by school and date
  const { loading, data } = useQuery(GET_DAILY_MENUS_BY_SCHOOL_AND_DATE, {
    variables: {
      schoolId: '656308b295c8e42fb3501c94',
      date: '11/20/23',
    },
  });

  // Update the week-related and meal information when the data changes
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

    // Check if data is loaded
    if (
      !loading &&
      data &&
      data.dailyMenusBySchoolAndDate &&
      data.dailyMenusBySchoolAndDate.length > 0
    ) {
      // Query returns only 1 meal
      const firstMeal = data.dailyMenusBySchoolAndDate[0];
      if (firstMeal) {
        // Set up the meal based on the result
        setMeals(firstMeal.meal);
      }
    }
  }, [data]); // Run this effect when data changes

  // Render menu items for a specific meal
  const renderMenuItems = (meal) => {
    // Check if data is still loading
    if (loading) return <p>Loading...</p>;

    // Check if there's an error in fetching data
    if (!data || !data.dailyMenusBySchoolAndDate) {
      return <p>Error fetching data</p>;
    }

    // Extract menu items for the specified meal
    const mealItems = data.dailyMenusBySchoolAndDate[0]?.menuItems.filter(
      (item) => item.category === meal,
    );

    // Check if there are no menu items for the specified meal
    if (!mealItems || mealItems.length === 0) {
      return <p>Bring your own.</p>;
    }

    // Render menu items
    return mealItems.map((item) => (
      <tr key={item._id}>
        <td>{item.name}</td>
      </tr>
    ));
  };

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
          <tr>
            {/* Render dates */}
            {dates.map((date, index) => (
              <td key={index}>{date}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Row for meal items */}
          <tr className="meal-row">
            <td colSpan="5">
              <h3>Breakfast</h3>
              <table>
                <tbody>{renderMenuItems('BREAKFAST')}</tbody>
              </table>
            </td>
          </tr>
          <tr className="meal-row">
            <td colSpan="5">
              <h3>Lunch</h3>
              <table>
                <tbody>{renderMenuItems('LUNCH')}</tbody>
              </table>
            </td>
          </tr>
          <tr className="meal-row">
            <td colSpan="5">
              <h3>Snack</h3>
              <table>
                <tbody>{renderMenuItems('SNACK')}</tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
