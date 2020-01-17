import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
   state = {
      credentials: {
         username: "",
         password: ""
      }
   }
   render() {
      return (
         <div>
            <h1>Login</h1>
            <input type="text" name="username" value={this.state.credentials.username}></input>
         </div>
      )
   }
}

export default Login;