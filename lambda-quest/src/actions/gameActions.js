import axios from "axios";

import { STARTGAME } from "./types";
import { MOVEGUY } from "../actions/types";

//GAME

//INIT

let token = {
  headers: { Authorization: "Token cbfaa68003c29eb56bed6b61eff460fa8d1d7e20" }
};

export const initGame = () => dispatch => {
  axios
    .get("https://lambda-mud-test.herokuapp.com/api/adv/init/", token)
    .then(res => {
      console.log(res);
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


//MOVE
export const chatApi = () => dispatch => {
  axios
    .post("https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a5c46f09-c95f-4317-b5bf-6542380cfddb/token")
    .then(res => {
      dispatch({
        
      });
    })
    .catch(err => console.log(err));
};
