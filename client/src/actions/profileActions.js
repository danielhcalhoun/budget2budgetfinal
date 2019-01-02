import axios from "axios";
import * as types from "./types";

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

//Profile loading
export const setProfileLoading = () => {
  return {
    type: types.PROFILE_LOADING
  };
};
