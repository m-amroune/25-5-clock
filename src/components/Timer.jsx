import React, { useEffect } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { 
  incrementBreak, decrementBreak, 
  startBreak, startSession, 
  incrementSession, decrementSession, 
  decrementTime,
 
} from '../features/timer/timerSlice';
import { useSelector, useDispatch } from 'react-redux';
import TimerAudio from './TimerAudio';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

const Timer = () => {
  const dispatch = useDispatch();

  // State redux
  const breakLength = useSelector(state => state.timer.breakLength);
  const sessionLength = useSelector(state => state.timer.sessionLength);
  const isRunning = useSelector(state => state.timer.isRunning);
  const timeLeft = useSelector(state => state.timer.timeLeft);
  const timerLabel = useSelector(state => state.timer.timerLabel);

  // start or stop the timer based on isRunning
  useEffect(() => {
    let intervalId;

    if (isRunning) {
       // Decrease timeLeft every second
      intervalId = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }
    // Clear the interval when timer stops or component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning, dispatch]);

    // Handle phase switch when timer reaches 0
  useEffect(() => {
    if (timeLeft === 0) {
      // play sound
      const audio = document.getElementById("beep");
      audio?.play();

      //wait 1 second before switch
      setTimeout(() => {
        if (timerLabel === 'Session') {
          dispatch(startBreak());
        } else {
          dispatch(startSession());
        }
      }, 1000);
    }
  }, [timeLeft, timerLabel, dispatch]);

  return (
    <div>
      <div className='main-title'>25 + 5 Clock</div>

      <div className='controls-container'>
        <div className='length-control'>
          <div id="break-label">Break Length</div>
          <div className='value-controls'>
            <button className='btn-level' id="break-decrement" onClick={() => dispatch(decrementBreak())} >
              <FaArrowDown />
            </button>
            <div id="break-length" className='length-value'>{breakLength}</div>
            <button id="break-increment" className='btn-level' onClick={() => dispatch(incrementBreak())} >
              <FaArrowUp />
            </button>
          </div>
        </div>

        <div className='length-control'>
          <div id="session-label">Session Length</div>
          <div className='value-controls'>
            <button className='btn-level' id='session-decrement' onClick={() => dispatch(decrementSession())} >
              <FaArrowDown />
            </button>
            <div id="session-length" className='length-value'>{sessionLength}</div>
            <button className='btn-level' id='session-increment' onClick={() => dispatch(incrementSession())} >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      <TimerDisplay />

      <TimerControls />

      <TimerAudio />
    </div>
  );
};

export default Timer;


