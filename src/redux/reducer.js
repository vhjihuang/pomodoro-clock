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
        timeLeft: state.timeLeft === 'Session' && !state.isRunning ? newSessionLength * 60 : state.timeLeft,
      }
    case ActionType.SET_TIMER_LABEL:
      return { ...state, timerLabel: action.payload }
    case ActionType.SET_TIME_LEFT:
      return { ...state, timeLeft: action.payload }
    case ActionType.SET_IS_RUNNING:
      return { ...state, isRunning: action.payload }
    case ActionType.SET_TIMER_INTERVAL_ID:
      return { ...state, timerIntervalId: action.payload }
    case ActionType.SET_RESET_ALL:
      if (state.timerIntervalId) {
        clearInterval(state.timerIntervalId)
      }
      return { ...initialState }
    default:
      return state
  }
}

export default reducer