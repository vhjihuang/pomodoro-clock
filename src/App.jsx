import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/App.scss'

import LengthControl from './components/LengthControl'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='pomodoro-clock' className='container mt-5'>
        <h1 className='text-center mb-4'>Pomodoro Clock</h1>

        <LengthControl
          labelId="break-label"
          lengthId="break-length"
          decrementId="break-decrement"
          incrementId="break-increment"
          labelText="Break Length"
          type="break"
        />

        <LengthControl
          labelId="session-label"
          lengthId="session-length"
          decrementId="session-decrement"
          incrementId="session-increment"
          labelText="session Length"
          type="session"
        />

        <Timer />
      </div>
    </>
  )
}

export default App
