import * as types from "./types";
import { logoutUser } from "./index";

export const onActive = () => dispatch => {
  console.log("user is active");
  dispatch({
    type: types.ON_ACTIVE
  });
};

export const onIdle = () => dispatch => {
  console.log("user is idle");
  dispatch({
    type: types.ON_IDLE
  });

  dispatch(logoutUser);
};

export const changeTimeout = values => dispatch => {
  console.log("timeout is changed");
  dispatch({
    type: types.CHANGE_IDLE_TIMEOUT,
    payload: values
  });
};

export const resetIdleTimer = () => dispatch => {
  console.log("timeout is reset");
  dispatch({
    type: types.RESET_IDLE_TIMER
  });
};

export const pauseIdleTimer = () => dispatch => {
  console.log("timeout is paused");
  dispatch({
    type: types.PAUSE_IDLE_TIMER
  });
};

export const resumeIdleTimer = () => dispatch => {
  console.log("timeout is resumed");
  dispatch({
    type: types.RESUME_IDLE_TIMER
  });
};

export const setElapsed = value => dispatch => {
  console.log("setting elapsed");
  dispatch({
    type: types.SET_ELAPSED,
    payload: value
  });
};

export const setRemaining = value => dispatch => {
  console.log("remaining");
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
