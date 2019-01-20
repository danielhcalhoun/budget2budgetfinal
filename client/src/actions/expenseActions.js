import axios from "axios";
import * as types from "./types";
import { GET_ERRORS } from "./types";

export const getCurrentExpenses = () => dispatch => {
  axios
    .get("/api/profile/current-expenses")
    .then(res =>
      dispatch({
        type: types.GET_CURRENT_EXPENSES,
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

export const addExpense = values => dispatch => {
  axios
    .post("/api/profile/expense", values)
    .then(res => dispatch({ type: types.ADD_EXPENSE, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteExpense = (id, index) => dispatch => {
  axios
    .delete(`/api/profile/expense/${id}`)
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

export const combineExpenses = values => dispatch => {
  dispatch({
    type: types.COMBINE_EXPENSES,
    payload: values
  });
};
