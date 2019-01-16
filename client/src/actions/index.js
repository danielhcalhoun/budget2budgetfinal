import axios from "axios";
import * as types from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/users/current");
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const loginUser = values => dispatch => {
  axios
    .post("/api/users/login", values)
    .then(res => {
      //save to local storage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      //set token to Auth header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set Logged in User
export const setCurrentUser = decoded => dispatch => {
  dispatch({
    type: types.SET_CURRENT_USER,
    payload: decoded
  });
};

export const registerUser = values => dispatch => {
  axios
    .post("/api/users/register", values)
    .then(res => dispatch({ type: types.REGISTER_USER, payload: res.data }))
    .then(() => dispatch(loginUser(values)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const navigateTo = path => async dispatch => {
  dispatch({ type: types.NAVIGATE_TO, payload: path });
};

//Log user out
export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove auth header for future requests
  dispatch(setAuthToken(false));
  //Set current user to {} which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
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