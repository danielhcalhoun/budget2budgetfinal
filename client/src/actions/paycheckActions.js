import axios from "axios";
import * as types from "./types";
import { GET_ERRORS } from "./types";

export const loadingCurrentPaychecks = () => dispatch => {
  dispatch({
    type: types.GET_CURRENT_PAYCHECKS_PENDING
  });
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
        type: types.GET_CURRENT_PAYCHECKS_ERROR,
        payload: err.response.data
      })
    );
};

export const addPaycheck = values => dispatch => {
  axios
    .post("/api/profile/paycheck", values)
    .then(res => dispatch({ type: types.ADD_PAYCHECK, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deletePaycheck = (id, index) => dispatch => {
  axios
    .delete(`/api/profile/paycheck/${id}`)
    .then(res =>
      dispatch({
        type: types.DELETE_PAYCHECK,
        payload: index
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const combinePaychecks = values => dispatch => {
  dispatch({
    type: types.COMBINE_PAYCHECKS,
    payload: values
  });
};
