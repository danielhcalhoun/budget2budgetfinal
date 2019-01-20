import axios from "axios";
import * as types from "./types";
import { GET_ERRORS } from "./types";

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
