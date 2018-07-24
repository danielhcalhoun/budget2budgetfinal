import axios from "axios";
import { FETCH_PROVIDERS } from "./types";
import { LOGIN_USER } from "./types";
import { REGISTER_USER } from "./types";
import { TEST_USER } from "./types";

export const fetchProviders = () => async dispatch => {
  const res = await axios.get("/api/provider/all");

  dispatch({ type: FETCH_PROVIDERS, payload: res.data });
};

export const loginUser = () => async dispatch => {
  const res = await axios.post("/api/users/login");

  dispatch({ type: LOGIN_USER, payload: res.data });
};

export const registerUser = () => async dispatch => {
  const res = await axios.post("/api/users/register");
  console.log(res);
  dispatch({ type: REGISTER_USER, payload: res.data });
};

export const testUser = () => async dispatch => {
  const res = await axios.post("/api/users/test");
  dispatch({ type: TEST_USER, payload: res.data });
};
