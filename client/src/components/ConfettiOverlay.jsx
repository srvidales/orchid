import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const ConfettiOverlay = () => {
  const { width, height } = useWindowSize();

  const confettiWidth = width * 0.5;
  const confettiHeight = height * 0.5;

  return <Confetti width={confettiWidth} height={confettiHeight} />;
};

export default ConfettiOverlay;
