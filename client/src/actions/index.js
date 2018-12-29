import axios from "axios";
import * as types from "./types";

export const fetchExpenses = () => async dispatch => {
  const res = await axios.get("/api/provider/all");
  dispatch({ type: types.FETCH_PROVIDERS, payload: res.data });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/users/current");
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const loginUser = (values, history) => async dispatch => {
  try {
    const res = await axios.post("/api/users/login", values);
    dispatch({ type: types.LOGIN_USER, payload: res.data });
  } catch (err) {
    console.log(err.response.data);
  }

  dispatch(navigateTo("/calendar"));
  history.push("/calendar");
};

export const registerUser = (values, history) => async dispatch => {
  try {
    const res = await axios.post("/api/users/register", values);
    dispatch({ type: types.REGISTER_USER, payload: res.data });
  } catch (err) {
    console.log(err.response.data);
  }

  dispatch(navigateTo("/calendar"));
  history.push("/calendar");
};

// export const testUser = () => async dispatch => {
//   const res = await axios.post("/api/users/test");
//   dispatch({ type: types.TEST_USER, payload: res.data });
// };

export const navigateTo = path => async dispatch => {
  dispatch({ type: types.NAVIGATE_TO, payload: path });
};
