import React from 'react';
import { useSelector } from 'react-redux';

const TimerDisplay = () => {
  const timerLabel = useSelector(state => state.timer.timerLabel);
  const timeLeft = useSelector(state => state.timer.timeLeft);

    // Converts seconds into MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className='timer'>
      <div className='timer-wrapper'>
        <div id="timer-label">{timerLabel}</div>
        <div id="time-left">{formatTime(timeLeft)}</div>
      </div>
    </div>
  );
};

export default TimerDisplay;


