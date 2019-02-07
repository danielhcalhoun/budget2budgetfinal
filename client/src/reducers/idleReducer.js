import {
  CHANGE_IDLE_TIMEOUT,
  ON_ACTIVE,
  ON_IDLE,
  PAUSE_IDLE_TIMER,
  RESET_IDLE_TIMER,
  RESUME_IDLE_TIMER
} from "../actions/types";

const initialState = {
  timeout: null,
  remaining: null,
  isIdle: false,
  lastActive: null,
  elapsed: null
};

export default function(state = initialState, action) {
  switch (action.type) {
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
