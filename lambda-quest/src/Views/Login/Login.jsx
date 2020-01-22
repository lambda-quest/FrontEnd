import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions'
import {Link} from 'react-router-dom'

class Login extends Component {
   state = {
      credentials: {
         username: "",
         password: ""
      }
   }

   handleChange = e => {
      this.setState({
         credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
         }
      })
   }

   handleLogin = e => {
      e.preventDefault();
      this.props.login(this.state.credentials)
      .then(()=>this.props.history.push('/game'))
   }

   render() {
      return (
         <div style={{maxWidth: '300px', margin: 'auto'}}>
            <h1>Login to Lambda Quest</h1>
            <form onSubmit={this.handleLogin} style={{display: 'flex', flexDirection: 'column'}}>
               <input type="text" name="username" placeholder="Username" 
                  value={this.state.credentials.username}
                  onChange={this.handleChange}>
               </input>
               <input type="password" name="password" placeholder="Password" 
                  value={this.state.credentials.password}
                  onChange={this.handleChange}>
               </input>

               <button type="submit">Login</button>
               {this.props.isLoggingIn ? "It's dangerous to go alone! Take this." : ""}
               {this.props.loggedIn ? `Welcome ${localStorage.getItem('Authorization')}` : ''}
               <p>Not Registered? Click <Link to='/register'>here</Link></p>
            </form>
            
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      isLoggingIn: state.isLoggingIn,
      loggedIn: state.loggedIn
   }
}

export default connect(mapStateToProps, {login})(Login);