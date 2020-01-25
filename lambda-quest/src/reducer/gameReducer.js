import { STARTGAME, MOVEGUY, BUILDMAP, GETPLAYERS } from "../actions/types";

const initialState = {
  player_id: "",
  uuid: "",
  name: "",
  title: "",
  description: "",
  player: [],
  rooms: [],
  otherpeople: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STARTGAME:
      return {
        ...state,
        player: action.payload
      };

    case MOVEGUY:
      return {
        ...state,
        player: action.payload
      };

    case BUILDMAP:
      return {
        ...state,
        rooms: action.payload
      };

    case GETPLAYERS:
      return {
        ...state,
        otherpeople: action.payload
      };

    default:
      return state;
  }
}
