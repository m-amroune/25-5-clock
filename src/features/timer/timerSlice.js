import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breakLength: 5,            // default value break
  sessionLength: 25,         // default value session
  isRunning: false, // timer in start or pause
  timeLeft: 25 * 60,
  timerLabel: "Session"
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    // increase break duration (max 60min)
    incrementBreak: (state) => {
      if (state.breakLength < 60) {
        state.breakLength += 1;
      }
    },
    // decreases break duration (min 1 min)
    decrementBreak: (state) => {
        if(state.breakLength > 1) {
            state.breakLength -= 1;
        }
    },
    // set timeLeft to break duration and update label
    startBreak(state) {
  state.timeLeft = state.breakLength * 60;
  state.timerLabel = 'Break';
},
// set timeLeft to session duration and update label
startSession(state) {
  state.timeLeft = state.sessionLength * 60;
  state.timerLabel = 'Session';
},
     //  increase session duration (max 60 min)
   incrementSession: (state) => {
  if (state.sessionLength < 60) {
    state.sessionLength += 1;
    if (!state.isRunning) {
      state.timeLeft = state.sessionLength * 60;
    }
  }
},
    //  decreases session duration (min 1 min)
    decrementSession: (state) => {
  if (state.sessionLength > 1) {
    state.sessionLength -= 1;
    if (!state.isRunning) {
      state.timeLeft = state.sessionLength * 60;
    }
  }
},


    //  reset durations with values by default
    resetTimer: (state) => {
      state.breakLength = initialState.breakLength;
      state.sessionLength = initialState.sessionLength;
      state.isRunning = false;
      state.timeLeft = initialState.sessionLength * 60;
      state.timerLabel = initialState.timerLabel;

    },
     // toggle timer between running and paused state
    toggleRunning(state) {
      state.isRunning = !state.isRunning;
    },
    // decrease timeLeft by 1 second
    decrementTime(state) {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
  }
  
});

export const {  incrementBreak, decrementBreak, startBreak,startSession, incrementSession, decrementSession, resetTimer, toggleRunning, decrementTime } = timerSlice.actions;

export default timerSlice.reducer;