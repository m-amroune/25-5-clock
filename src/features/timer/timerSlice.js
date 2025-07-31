import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breakLength: 5,            // default value break
  sessionLength: 25,         // default value session

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
     //  increase session duration (max 60 min)
    incrementSession: (state) => {
      if (state.sessionLength < 60) {
        state.sessionLength += 1;
      }
    },
    //  decreases session duration (min 1 min)
    decrementSession: (state) => {
      if (state.sessionLength > 1) {
        state.sessionLength -= 1;
      }
    },
    //  reset durations with values by default
    resetTimer: (state) => {
      state.breakLength = initialState.breakLength;
      state.sessionLength = initialState.sessionLength;
    },
  }
  
});

export const {  incrementBreak, decrementBreak, incrementSession, decrementSession, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;