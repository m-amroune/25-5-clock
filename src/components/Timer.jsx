import React from 'react'
import { FaArrowUp, FaArrowDown, FaPlay, FaPause, FaSync } from 'react-icons/fa';

const Timer = () => {
  return (
    <div>
      
         <div className='main-title' > 25 + 5 Clock </div>
    <div className='controls-container'>
        <div className='length-control' >
            <div id="break-label" >Break Length</div>
            <div className='value-controls'>
            <button className='btn-level' id="break-decrement" >
                <i><FaArrowDown/> </i>
            </button>
            <div id="break-length"  className='length-value' >5</div>
            <button  id="break-increment" className='btn-level' >
                <i><FaArrowUp /></i>
            </button>
        </div>
        </div>
        <div className='length-control' >
            <div id="session-label" >Session Length</div>
            <div className='value-controls'>
            <button className='btn-level' id='session-decrement' >
                <i><FaArrowDown/></i>
            </button>
            <div className='length-value' >25</div>
            <button className='btn-level' id='session-increment' >
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
            <button id="reset" >
                <i><FaSync /></i>
            </button>
        </div>



    </div>
  )
}

export default Timer
