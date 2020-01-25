import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
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
    this.props.register(this.state.credentials).then(() => {
      if (!this.props.error) {
        this.props.history.push("/game");
      }
      this.props.history.push("/game");
    });
  };

  render() {
    console.log("inside register");
    console.log(this.props.error);
    return (
      <div className="registerPage">
        <div className="registerContainer">
          <span>Welcome to</span>
          <h2>Lambda Quest</h2>
          <form className="lquestForm" onSubmit={this.handleRegister}>
            {this.props.error ? (
              <p style={{ fontSize: "8px", color: "red" }}>
                Your password must contain at least 8 characters and cannot be
                entirely numeric.
              </p>
            ) : (
              <p></p>
            )}
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

const mapStateToProps = state => ({
  error: state.authReducer.error
});

export default connect(mapStateToProps, { register })(Register);
