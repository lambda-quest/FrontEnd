import { STARTGAME, MOVEGUY } from "../actions/types";

const initialState = {
  uuid: "",
  name: "",
  title: "",
  description: "",
  players: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STARTGAME:
      return {
        ...state,
        players: action.payload
      };

    case MOVEGUY:
      return {
        ...state,
        players: action.payload
      };

    default:
      return state;
  }
}
