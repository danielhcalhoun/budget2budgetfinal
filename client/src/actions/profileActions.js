import axios from "axios";
import * as types from "./types";
import { GET_ERRORS } from "./types";

//Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading);
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: types.GET_PROFILE,
        payload: res.data
      })
    )
    .catch(() =>
      dispatch({
        type: types.GET_PROFILE,
        payload: {}
      })
    );
};

export const getCurrentPaychecks = () => dispatch => {
  axios
    .get("/api/profile/current-paychecks")
    .then(res =>
      dispatch({
        type: types.GET_CURRENT_PAYCHECKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Profile loading
export const setProfileLoading = () => {
  return {
    type: types.PROFILE_LOADING
  };
};
