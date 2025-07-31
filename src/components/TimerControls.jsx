import React from 'react';
import { FaPlay, FaPause, FaSync } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleRunning, resetTimer } from '../features/timer/timerSlice';

const TimerControls = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(state => state.timer.isRunning);
   // Handle reset button click
  const handleReset = () => {
    dispatch(resetTimer()); 

    const audio = document.getElementById("beep");
    if (audio) {
      audio.pause();          //  Stop sound
      audio.currentTime = 0;  //  reset sound to the beginning
    }
  };

  return (
    <div className='timer-control'>
      <button id="start_stop" onClick={() => dispatch(toggleRunning())} >
        {isRunning ? "Pause" : "Start"}
        <i><FaPlay /></i>
        <i><FaPause /></i>
      </button>
      <button id="reset" onClick={handleReset}>
        <i><FaSync /></i>
      </button>
    </div>
  );
};

export default TimerControls;



