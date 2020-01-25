import axios from "axios";

import { STARTGAME } from "../actions/types";
import { MOVEGUY } from "../actions/types";
import { BUILDMAP } from "../actions/types";
import { GETPLAYERS } from "../actions/types";

let token = {
  headers: { Authorization: `${localStorage.getItem("Authorization")}` }
};

export const initGame = () => dispatch => {
  console.log('inside initGame method: ', token);
  return axios
    .get("https://reed-test.herokuapp.com/api/adv/init/", token)
    .then(res => {
      console.log("init");
      // console.log(res);
      dispatch({
        type: STARTGAME,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getPlayers = () => dispatch => {
  console.log('inside getPlayers method: ', token);
  return axios
    .get("https://reed-test.herokuapp.com/api/adv/getPlayers/", token)
    .then(res => {
      console.log("players gotten");
      // console.log(res);
      dispatch({
        type: GETPLAYERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getRooms = () => dispatch => {
  console.log('inside getRooms method: ', token);
  return axios
    .get("https://reed-test.herokuapp.com/api/adv/getRooms/", token)
    .then(res => {
      console.log("get Rooms");
      // console.log(res);
      dispatch({
        type: BUILDMAP,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//MOVE
export const movePlayer = direction => dispatch => {
  axios.post("https://reed-test.herokuapp.com/api/adv/move/", direction, token);
  // .then(res => {
  axios
    .get("https://reed-test.herokuapp.com/api/adv/init/", token)
    .then(res => {
      dispatch({
        type: MOVEGUY,
        payload: res.data
      });
    })
    .then(()=>{
      axios
      .get("https://reed-test.herokuapp.com/api/adv/init/", token)
      .then(res => {
        console.log("init");
        // console.log(res);
        dispatch({
          type: STARTGAME,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
