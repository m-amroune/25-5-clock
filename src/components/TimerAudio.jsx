import React from 'react'

const TimerAudio = () => {
// Audio element for timer alarm sound
  return (
    <audio
      id="beep"
      preload="auto"
      src="/beep.mp3"
    />
  )
}

export default TimerAudio
