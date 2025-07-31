import React from 'react'
import { FaArrowUp, FaArrowDown, FaPlay, FaPause, FaSync } from 'react-icons/fa';
import { incrementBreak,decrementBreak,incrementSession,decrementSession, resetTimer } from '../features/timer/timerSlice';
import { useSelector, useDispatch } from 'react-redux';



const Timer = () => {
 const dispatch = useDispatch();
const breakLength = useSelector(state => state.timer.breakLength);
const sessionLength = useSelector(state => state.timer.sessionLength);

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
                <div id="time-left" >25 : 00</div>
            </div>
        </div>

        <div className='timer-control' >
            <button  id="start_stop" >
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
