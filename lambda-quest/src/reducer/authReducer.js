import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions/types";

const initialState = {
  loggingIn: false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state
      };
    case LOGIN_FAILURE:
      return {
        ...state
      };
    case REGISTER_START:
      return {
        ...state
      };
    case REGISTER_SUCCESS:
      return {
        ...state
      };
    case REGISTER_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
