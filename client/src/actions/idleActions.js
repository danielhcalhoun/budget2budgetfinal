import * as types from "./types";
import { logoutUser } from "./index";

export const onActive = () => dispatch => {
  dispatch({
    type: types.ON_ACTIVE
  });
};

export const onIdle = () => dispatch => {
  dispatch({
    type: types.ON_IDLE
  });

  dispatch(logoutUser);
};

export const changeTimeout = values => dispatch => {
  dispatch({
    type: types.CHANGE_IDLE_TIMEOUT,
    payload: values
  });
};

export const resetIdleTimer = () => dispatch => {
  dispatch({
    type: types.RESET_IDLE_TIMER
  });
};

export const pauseIdleTimer = () => dispatch => {
  dispatch({
    type: types.PAUSE_IDLE_TIMER
  });
};

export const resumeIdleTimer = () => dispatch => {
  dispatch({
    type: types.RESUME_IDLE_TIMER
  });
};

export const setElapsed = value => dispatch => {
  dispatch({
    type: types.SET_ELAPSED,
    payload: value
  });
};

export const setRemaining = value => dispatch => {
  dispatch({
    type: types.SET_REMAINING,
    payload: value
  });
};

export const setRemainingInterval = value => dispatch => {
  dispatch({
    type: types.SET_REMAINING_INTERVAL,
    payload: value
  });
};

export const destroyRemainingInterval = value => dispatch => {
  dispatch({
    type: types.DESTROY_REMAINING_INTERVAL
  });
};

