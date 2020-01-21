import {combineReducers} from 'redux'
import gameReducer from './gameReducer'

export default combineReducers({
  gameReducer
});


// import {
//    // REGISTER_START,
//    REGISTER_SUCCESS,
//    REGISTER_FAILURE,

//    LOGIN_START,
//    LOGIN_SUCCESS,
//    LOGIN_FAILURE,

//    INIT_START,
//    INIT_SUCCESS,
//    INIT_FAILURE,

//    MOVE_START,
//    MOVE_SUCCESS,
//    MOVE_FAILURE,
// } from '../actions/index'


// const initialState = {
//    isLoggingIn: false,
//    loggedIn: false,
//    token: localStorage.getItem('token'),
//    loginError:'',
//    error:'',
//    errorStatusCode:null

   
// }

// export default (state = initialState, action) => {
//    switch (action.type) {
//       // case REGISTER_START: {
//       //    return {
//       //       ...state,
//       //    }
//       // }
//       case REGISTER_SUCCESS: {
//          return {
//             ...state,
//          }
//       }
//       case REGISTER_FAILURE: {
//          return {
//             ...state,
//          }
//       }
//       case LOGIN_START: {
//          return {
//             ...state,
//             isLoggingIn: true
//          }
//       }
//       case LOGIN_SUCCESS: {
//          return {
//             ...state,
//             isLoggingIn: false,
//             loggedIn: true
//          }
//       }
//       case LOGIN_FAILURE: {
//          return {
//             ...state,
//             isLoggingIn: false
//          }
//       }
//       case INIT_START: {
//          return {
//             ...state,
//          }
//       }
//       case INIT_SUCCESS: {
//          return {
//             ...state,
//          }
//       }
//       case INIT_FAILURE: {
//          return {
//             ...state,
//          }
//       }
//       case MOVE_START: {
//          return {
//             ...state,
//          }
//       }
//       case MOVE_SUCCESS: {
//          return {
//             ...state,
//          }
//       }
//       case MOVE_FAILURE: {
//          return {
//             ...state,
//          }
//       }
//       default:
//          return state
//    }
// }