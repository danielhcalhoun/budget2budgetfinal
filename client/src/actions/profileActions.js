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



//Profile loading
export const setProfileLoading = () => {
  return {
    type: types.GET_PROFILE_PENDING
  };
};

export const createProfile = () => dispatch => {
  axios
    .post("/api/profile")
    .then(
      dispatch({
        type: types.CREATE_PROFILE
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

