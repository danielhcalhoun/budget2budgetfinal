import {
  CHANGE_IDLE_TIMEOUT,
  DESTROY_REMAINING_INTERVAL,
  ON_ACTIVE,
  ON_IDLE,
  PAUSE_IDLE_TIMER,
  RESET_IDLE_TIMER,
  RESUME_IDLE_TIMER,
  SET_ELAPSED,
  SET_REMAINING,
  SET_REMAINING_INTERVAL
} from "../actions/types";

const initialState = {
  timeout: 1000 * 60 * 15,
  remaining: 99999999,
  isIdle: false,
  lastActive: null,
  elapsed: null,
  remainingInterval: null
};

export default function(state = initialState, action) {
  switch (action.type) {
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
        ...state
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
