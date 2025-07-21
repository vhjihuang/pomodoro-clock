import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  SET_BREAK_LENGTH,
  SET_SESSION_LENGTH,
  SET_TIME_LEFT,
  SET_IS_RUNNING,
  SET_TIMER_LABEL
} from '../redux/actionTypes'

function LengthControl({ labelId, lengthId, decrementId, incrementId, labelText, type }) {
  const dispatch = useDispatch()
  const breakLength = useSelector(state => state.breakLength)
  const sessionLength = useSelector(state => state.sessionLength)
  const timeLeft = useSelector(state => state.timeLeft)
  const isRunning = useSelector(state => state.isRunning)
  const timerLabel = useSelector(state => state.timerLabel)

  const currentLength = type === 'break' ? breakLength : sessionLength

  const handleDecrement = () => {
    if (isRunning) return;

    if (currentLength > 1) {
      const newLength = currentLength - 1
      if (type === 'break') {
        dispatch({ type: SET_BREAK_LENGTH, payload: newLength })
      } else {
        dispatch({ type: SET_SESSION_LENGTH, payload: newLength })
        if (timerLabel === 'Session') {
          
          dispatch({ type: SET_TIME_LEFT, payload: newLength * 60 })
          console.log('1111')
        }
      }
    }
  }

  const handleIncrement = () => {
    if (isRunning) return;

    if (currentLength < 60) {
      const newLength = currentLength + 1
      if (type === 'break') {
        dispatch({ type: SET_BREAK_LENGTH, payload: newLength })
      } else {
        dispatch({ type: SET_SESSION_LENGTH, payload: newLength })
        if (timerLabel === 'Session') {
          dispatch({ type: SET_TIME_LEFT, payload: newLength * 60 })
        }
      }
    }
  }

  return (
    <div className='length-control-container'>
      <div id={labelId} className='label'>
        {labelText}
        <div className="d-flex justify-content-center align-items-center my-2">
          <button id={decrementId} onClick={handleDecrement} disabled={isRunning} className="btn btn-danger btn-sm me-2">-</button>
          <span id={lengthId} className="mx-2">{currentLength}</span>
          <button id={incrementId} onClick={handleIncrement} disabled={isRunning} className="btn btn-success btn-sm ms-2">+</button>
        </div>
      </div>
    </div>
  )
}

export default LengthControl;