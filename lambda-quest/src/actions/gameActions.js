import axios from "axios";

import { STARTGAME } from "./types";
import { MOVEGUY } from "../actions/types";

//GAME

//INIT

let token = {
  headers: { Authorization: "Token 1724136578a1be6abd0e996c181da3cf0d3b22b4" }
};

export const initGame = () => dispatch => {
  axios
    .get("https://lambda-mud-test.herokuapp.com/api/adv/init/", token)
    .then(res => {
      dispatch({
        type: STARTGAME,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//MOVE
export const movePlayer = direction => dispatch => {
  axios
    .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", direction, token)
    .then(res => {
      dispatch({
        type: MOVEGUY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
