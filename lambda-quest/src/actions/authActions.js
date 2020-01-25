import axios from "axios";

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types.js";
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "./types.js";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://reed-test.herokuapp.com/api/login/", credentials)
    .then(res => {
      console.log("auth action");
      console.log(res);
      console.log("auth action");
      localStorage.setItem("Authorization", `Token ${res.data.key}`);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log("Error logging in:", err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });

  return axios
    .post(
      "https://reed-test.herokuapp.com/api/registration/",
      credentials
    )
    .then(res => {
      console.log("register action");
      console.log(res);
      console.log("register action");
      localStorage.setItem("Authorization", `Token ${res.data.key}`);
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(credentials);
      console.log("Error registering user:", err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};
