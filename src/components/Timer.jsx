import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_RUNNING, RESET_ALL, SET_TIME_LEFT, SET_TIMER_INTERVAL_ID, DECREMENT_TIME_LEFT, SET_TIMER_LABEL, TOGGLE_TIMER_PHASE } from "../redux/actionTypes";
import { formatTime } from "../utils/timeUtils";

function Timer() {
  const dispatch = useDispatch()
  const timerLabel = useSelector(state => state.timerLabel)
  const timeLeft = useSelector(state => state.timeLeft)
  const isRunning = useSelector(state => state.isRunning)
  const timerIntervalId = useSelector(state => state.timerIntervalId)
  const sessionLength = useSelector(state => state.sessionLength)
  const breakLength = useSelector(state => state.breakLength)

  const audioBeepRef = useRef(null)


  const startCountdown = useCallback(() => {
    if (timerIntervalId) {
      clearInterval(timerIntervalId)
      dispatch({ type: SET_TIMER_INTERVAL_ID, payload: null })
    }
    dispatch({ type: SET_IS_RUNNING, payload: true })
    const interval = setInterval(() => {
      dispatch({ type: DECREMENT_TIME_LEFT })
    }, 1000)
    dispatch({ type: SET_TIMER_INTERVAL_ID, payload: interval })
  }, [dispatch, timerIntervalId])

  const stopCountDown = useCallback(() => {
    if (timerIntervalId) {
      clearInterval(timerIntervalId)
      dispatch({ type: SET_TIMER_INTERVAL_ID, payload: null })
    }
    dispatch({ type: SET_IS_RUNNING, payload: false })
  }, [dispatch, timerIntervalId])

  const handleStartStop = useCallback(() => {
    if (isRunning) {
      stopCountDown()
    } else {
      startCountdown()
    }
  }, [isRunning, startCountdown, stopCountDown])

  const handleReset = useCallback(() => {
    stopCountDown()

    if (audioBeepRef.current) {
      audioBeepRef.current.pause()
      audioBeepRef.current.currentTime = 0
    }

    dispatch({ type: RESET_ALL })
  }, [dispatch, stopCountDown])

  useEffect(() => {
    if (timeLeft === 0) {
      stopCountDown()
      if (audioBeepRef.current) {
        audioBeepRef.current.currentTime = 0
        audioBeepRef.current.play()
      }

      dispatch({ type: TOGGLE_TIMER_PHASE })
    }


  }, [timeLeft, dispatch, stopCountDown])

  useEffect(() => {
    if (isRunning && timerIntervalId === null && timeLeft > 0) {
      startCountdown()
    }
    return () => {
      if (!isRunning && timerIntervalId) {
        clearInterval(timerIntervalId)
        dispatch({ type: SET_TIMER_INTERVAL_ID, payload: null })
      }
    }
  }, [dispatch, isRunning, timerIntervalId, timeLeft, startCountdown])

  useEffect(() => {
    return () => {
      if (timerIntervalId) {
        clearInterval(timerIntervalId)
      }
    }
  }, [timerIntervalId])

  return (
    <div className="timer-container mt-5 p-4 border rounded">
      <h2 id="timer-label" className="mb-3">{timerLabel}</h2>
      <div id="time-left" className="display-1 fw-bold">{formatTime(timeLeft)}</div>

      <div className="controls mt-4">
        <button id="start_stop" onClick={handleStartStop} className="btn btn-primary mx-2 px-4 py-2">Start / Stop</button>
        <button id="reset" onClick={handleReset} className="btn btn-warning mx-2 px-4 py-2">Reset</button>
      </div>
      <audio id="beep" ref={audioBeepRef} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" preload="auto"></audio>
    </div>
  )
}

export default Timer;