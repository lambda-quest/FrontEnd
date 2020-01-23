import axios from "axios";

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types.js";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://lambda-mud-test.herokuapp.com/api/login/", credentials)
    .then(res => {
      console.log("auth action");
      console.log(res);
      console.log("auth action");
      localStorage.setItem("Authorization", `Token ${res.data.key}`);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log("Error logging in", err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};
