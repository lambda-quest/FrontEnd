import axios from 'axios'

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = credentials => dispatch => {
   dispatch({type: REGISTER_START});

   return axios
      .post('https://lambda-mud-test.herokuapp.com/api/registration/', credentials)
      .then(res => {
         localStorage.setItem('Authorization', res.data);
         dispatch({type: REGISTER_SUCCESS, payload: res})
      })
      .catch(err => {
         console.log("Registration Error:", err);
         dispatch({type: REGISTER_FAILURE, payload: err});
      })
}


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch=>{
  dispatch({type:LOGIN_START});

  return axios
   .post('https://lambda-mud-test.herokuapp.com/api/login/', credentials)
   .then(res =>{
      console.log(res)
      localStorage.setItem('Authorization', `Token ${res.data.key}`);
      dispatch({type:LOGIN_SUCCESS, payload:res})
   })
   .catch(err=>{
      console.log("You've got an error homie", err);
      dispatch({type:LOGIN_FAILURE, payload:err})
   })

} 



export const INIT_START = "INIT_START";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const INIT_FAILURE = "INIT_FAILURE";




export const MOVE_START = "MOVE_START";
export const MOVE_SUCCESS = "MOVE_SUCCESS";
export const MOVE_FAILURE = "MOVE_FAILURE";