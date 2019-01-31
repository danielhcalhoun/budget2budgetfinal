import axios from "axios";
import * as types from "./types";
import { GET_ERRORS } from "./types";

export const loadingCurrentExpenses = () => dispatch => {
  dispatch({
    type: types.GET_CURRENT_EXPENSES_PENDING
  });
};

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
    .then(res => dispatch({ type: types.ADD_EXPENSE, payload: values }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentExpense = values => dispatch => {
  dispatch({ type: types.SET_CURRENT_EXPENSE, payload: values });
};

export const editExpense = (values, id) => dispatch => {
  axios
    .post(`/api/profile/expense/${id}`, values)
    .then(res => {
      dispatch({ type: types.EDIT_EXPENSE, payload: values });
    })
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
        type: types.DELETE_EXPENSE,
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
