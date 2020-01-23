import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import { Link } from "react-router-dom";
import "./register.css";

class Register extends Component {
  state = {
    credentials: {
      username: "",
      password1: "",
      password2: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state.credentials);
    // .then(()=>this.props.history.push('/game'))
  };

  render() {
    return (
      <div className="registerPage">
        <div className="registerContainer">
          <span>Welcome to</span>
          <h2>Lambda Quest</h2>
          <form className="lquestForm">
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="username"
            />
  
            <input
              type="password"
              name="password1"
              value={this.state.credentials.password1}
              onChange={this.handleChange}
              placeholder="password"
            />
  
            <input
              type="password"
              name="password2"
              value={this.state.credentials.password2}
              onChange={this.handleChange}
              placeholder="confirm password"
            />
  
            <button type="submit">
              {this.props.isLoggingIn ? "Please Wait..." : "Register"}
            </button>
            {this.props.loggedIn
              ? `Welcome ${localStorage.getItem("Authorization")}`
              : ""}
  
            <p>
              Already Registered? Click <Link to="/">here</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // error,
    isLoggingIn: state.isLoggingIn,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { register })(Register);
