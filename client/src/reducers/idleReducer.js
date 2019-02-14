import {
  CHANGE_IDLE_TIMEOUT,
  DESTROY_REMAINING_INTERVAL,
  ON_ACTIVE,
  ON_IDLE,
  PAUSE_IDLE_TIMER,
  RESET_IDLE_TIMER,
  RESUME_IDLE_TIMER,
  SET_ELAPSED,
  SET_LAST_ACTIVE_TIME,
  SET_REMAINING,
  SET_REMAINING_INTERVAL
} from "../actions/types";

const initialState = {
  timeout: 1000 * 60 * 2,
  remaining: 99999999,
  isIdle: false,
  lastActive: null,
  elapsed: null,
  remainingInterval: null,
  localStorage: window.localStorage
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LAST_ACTIVE_TIME:
      return {
        ...state,
        localStorage: {
          lastActive: action.payload
        }
      };
    case SET_REMAINING_INTERVAL:
      return {
        ...state,
        remainingInterval: action.payload
      };
    case DESTROY_REMAINING_INTERVAL:
      return {
        ...state,
        remainingInterval: clearInterval(state.remainingInterval)
      };
    case ON_ACTIVE:
      return {
        ...state,
        isIdle: false
      };
    case ON_IDLE:
      return {
        ...state,
        isIdle: true
      };
    case SET_ELAPSED:
      return {
        ...state,
        elapsed: action.payload
      };
    case SET_REMAINING:
      return {
        ...state,
        remaining: action.payload
      };
    case CHANGE_IDLE_TIMEOUT:
      return {
        ...state,
        timeout: action.payload
      };
    case RESET_IDLE_TIMER:
      return {
        state: initialState
      };
    case PAUSE_IDLE_TIMER:
      return {
        ...state
      };
    case RESUME_IDLE_TIMER:
      return {
        ...state
      };
    default:
      return state;
  }
}
