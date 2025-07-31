import React, { useEffect } from 'react'
import { FaArrowUp, FaArrowDown, FaPlay, FaPause, FaSync } from 'react-icons/fa';
import { incrementBreak,decrementBreak,incrementSession,decrementSession, resetTimer, toggleRunning, decrementTime, timeLeft } from '../features/timer/timerSlice';
import { useSelector, useDispatch } from 'react-redux';



const Timer = () => {
 const dispatch = useDispatch();
const breakLength = useSelector(state => state.timer.breakLength);
const sessionLength = useSelector(state => state.timer.sessionLength);
const isRunning = useSelector(state => state.timer.isRunning  );
const timeLeft = useSelector((state) => state.timer.timeLeft);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};



useEffect(()=>{
    let intervalId;

    if(isRunning) {
        intervalId = setInterval(()=>{
            dispatch(decrementTime());
        }, 1000);
    }

    return () => clearInterval(intervalId);
}, [isRunning, dispatch])

  return (
    <div>
      
         <div className='main-title' > 25 + 5 Clock </div>
    <div className='controls-container'>
        <div className='length-control' >
            <div id="break-label" >Break Length</div>
            <div className='value-controls'>
            <button className='btn-level' id="break-decrement" onClick={() => dispatch(decrementBreak())} >
                <i><FaArrowDown/> </i>
            </button>
            <div id="break-length"  className='length-value' > {breakLength}  </div>
            <button  id="break-increment" className='btn-level' onClick={() => dispatch(incrementBreak())} >
                <i><FaArrowUp /></i>
            </button>
        </div>
        </div>
        <div className='length-control' >
            <div id="session-label" >Session Length</div>
            <div className='value-controls'>
            <button className='btn-level' id='session-decrement' onClick={() => dispatch(decrementSession())} >
                <i><FaArrowDown/></i>
            </button>
            <div id="session-length" className='length-value' >{sessionLength}</div>
            <button className='btn-level' id='session-increment' onClick={() => dispatch(incrementSession())} >
                <i><FaArrowUp /></i>
            </button>
        </div>
         </div>
    </div>
   

        <div className='timer' >
            <div className='timer-wrapper' >
                <div id="timer-label" >Session</div>
                <div id="time-left" >{formatTime(timeLeft)}</div>
            </div>
        </div>

        <div className='timer-control' >
            <button  id="start_stop" onClick={() => dispatch(toggleRunning())} >
                {isRunning ? "Pause" : "Start"}
                <i><FaPlay /></i>
                <i><FaPause /></i>
            </button>
            <button id="reset" onClick={() => dispatch(resetTimer())} >
                <i><FaSync /></i>
            </button>
        </div>



    </div>
  )
}

export default Timer
