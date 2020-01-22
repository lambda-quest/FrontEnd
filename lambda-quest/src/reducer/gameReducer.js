import {STARTGAME} from '../actions/types'
import {MOVEGUY } from '../actions/types'

//    INIT_START,
//    INIT_SUCCESS,
//    INIT_FAILURE,

//    MOVE_START,
//    MOVE_SUCCESS,
//    MOVE_FAILURE,

const initialState = {
  uuid: "", 
  name: "", 
  title: "", 
  description: "", 
  players: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case STARTGAME:
      return {
        ...state,
        players: action.payload
      }

      case MOVEGUY:
      return {
        ...state,
        players: action.payload
      }

      default:
        return state
  }
}


