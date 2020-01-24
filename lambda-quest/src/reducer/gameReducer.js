import { STARTGAME, MOVEGUY, BUILDMAP } from "../actions/types";

const initialState = {
  player_id: "",
  uuid: "",
  name: "",
  title: "",
  description: "",
  player: [],
  rooms: []
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
        players: action.payload
      };

    case BUILDMAP:
      return {
        ...state,
        rooms: action.payload
      };

    default:
      return state;
  }
}
