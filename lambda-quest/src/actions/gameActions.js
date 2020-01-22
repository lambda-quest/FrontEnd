import axios from "axios";

import { STARTGAME } from "./types";
import {MOVEGUY } from '../actions/types'


//GAME

//INIT

let token = {
  headers: { Authorization: "Token cbfaa68003c29eb56bed6b61eff460fa8d1d7e20" }
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
export const MoveGuy = () => dispatch => {
  axios
    .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", token)
    .then(res => {
      dispatch({
        type: MOVEGUY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
