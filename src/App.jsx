import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='pomodoro-clock' className='container mt-5'>
        <h1 className='text-center mb-4'>Pomodoro Clock</h1>
        <div id="break-label" className='label'>
          Break Length
          <div className="d-flex justify-content-center align-items-center my-2">
            <button id="break-decrement" className="btn btn-danger me-2">-</button>
            <span id="break-length" className="mx-2">5</span>
            <button id="break-increment" className="btn btn-success ms-2">+</button>
          </div>
        </div>
        <div id="session-label">
          Session Length
          <div className="d-flex justify-content-center align-items-center my-2">
            <button id="session-decrement" className="btn btn-danger me-2">-</button>
            <span id="session-length" className="mx-2">25</span>
            <button id="session-increment" className="btn btn-success ms-2">+</button>
          </div>
        </div>
        <div className="time-container mt-5 p-4 border rounded">
          <div id="timer-label" className="mb-3">Session</div>
          <div id="time-left" className="display-4">25:00</div>
        </div>
        <div className="controls mt-4">
          <button id="start-stop" className="btn btn-primary mx-2 px-4 py-2">Start</button>
          <button id="reset" className="btn btn-secondary mx-2 px-4 py-2">Reset</button>
        </div>

        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" preload="auto"></audio>
      </div>
    </>
  )
}

export default App
