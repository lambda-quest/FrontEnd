import React, { Component } from 'react'
import { connect } from 'react-redux';
import { register } from '../../actions'
import {Link} from 'react-router-dom'

class Register extends Component {
  state = {
    credentials: {
      username: '',
      password1: '',
      password2: ''
    }
  }

  handleChange=e=>{
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleRegister = e=>{
    e.preventDefault();
    this.props.register(this.state.credentials)
    .then(()=>this.props.history.push('/game'))
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChange={this.handleChange}
          placeholder='username'
          />

          <input 
          type='password'
          name='username'
          value={this.state.credentials.password1}
          onChange={this.handleChange}
          placeholder='password'/>

          <input 
          type='password'
          name='username'
          value={this.state.credentials.password2}
          onChange={this.handleChange}
          placeholder='confirm password'/>

          <button>
          {this.props.isLoggingIn? ('Please Wait...'):('Register')}
          </button>

          {/* {this.props.error && <p {this.props.error}></p>} */}
          <p>Already Registered? Click <Link to='/'>here</Link></p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // error,
     isLoggingIn: state.isLoggingIn
  }
}

export default connect(mapStateToProps, {register})(Register);
