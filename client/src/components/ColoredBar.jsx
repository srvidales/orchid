import React from 'react';

const ColoredBar = () => {
  const barStyle = {
    backgroundColor: '#4a67a7',
    height: '2rem',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000, // Ensure the bar is above other content
  };

  return <div style={barStyle}></div>;
};

export default ColoredBar;