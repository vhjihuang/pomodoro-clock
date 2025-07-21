import * as ActionType from './actionTypes'

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timerLabel: 'Session',
  timeLeft: 25 * 60,
  isRunning: false,
  timerIntervalId: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_BREAK_LENGTH:
      const newBreakLength = Math.max(1, Math.min(60, action.payload))
      return { ...state, breakLength: newBreakLength }
    case ActionType.SET_SESSION_LENGTH:
      const newSessionLength = Math.max(1, Math.min(60, action.payload))
      return { 
        ...state,
        sessionLength: newSessionLength,
        timeLeft: state.timerLabel === 'Session' && !state.isRunning ? newSessionLength * 60 : state.timeLeft,
      }
    case ActionType.SET_TIMER_LABEL:
      return { ...state, timerLabel: action.payload }
    case ActionType.SET_TIME_LEFT:
      return { ...state, timeLeft: action.payload }
    case ActionType.DECREMENT_TIME_LEFT: 
      return {
        ...state,
        timeLeft: state.timeLeft - 1 
      }
    case ActionType.SET_IS_RUNNING:
      return { ...state, isRunning: action.payload }
    case ActionType.SET_TIMER_INTERVAL_ID:
      return { ...state, timerIntervalId: action.payload }
    case ActionType.RESET_ALL:
      if (state.timerIntervalId) {
        clearInterval(state.timerIntervalId)
      }
      return { ...initialState }
    case ActionType.TOGGLE_TIMER_PHASE: 
      const nextTimerLabel  = state.timerLabel === 'Session' ? 'Break' : 'Session';
      const nextTimeLeft = nextTimerLabel === "Session" ? state.sessionLength * 60 : state.breakLength * 60

      if(state.timerIntervalId) {
        clearInterval(state.timerIntervalId)
      }
      return {
        ...state,
        timerLabel: nextTimerLabel,
        timeLeft: nextTimeLeft,
        isRunning: true,
        timerIntervalId: null
      }
    default:
      return state
  }
}

export default reducer