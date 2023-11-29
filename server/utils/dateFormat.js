module.exports = (timestamp) => {
  const dateObj = new Date(timestamp);
  const formattedTimeStamp = dateObj.toLocaleDateString();

  return formattedTimeStamp;
};
