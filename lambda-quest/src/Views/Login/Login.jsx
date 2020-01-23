import React, { Component } from "react";
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
//components
import { login } from "../../actions/authActions";
import LoginSound from "./loginComponent/LoginSound";
//styling
import "./login.css";
//assetts
import guy from "../../assets/lambdaDudeAlone-removebg.png";
import pete from "../../assets/justPete-removebg.png";
import logo from "../../assets/logo1.JPG";
import mute from "../../assets/mute-removebg.png";
import unmute from "../../assets/unmute-removebg.png";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
      bgmusic: true
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

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/game"));
  };

  musictoggle = () => {
    this.setState({ bgmusic: !this.state.bgmusic });
    console.log(this.state.bgmusic);
  };

  render() {
    return (
      <div className="loginPage">
        {this.state.bgmusic ?  '' : <LoginSound />}

        <div className="mute-container" onClick={this.musictoggle}>
          {this.state.bgmusic ? (
            <img src={mute} alt="" className="unmute" />
          ) : (
            <img src={unmute} alt="" className="mute" />
          )}
        </div>
        <div className="loginContainer">
          <p>Welcome to</p>

          <img src={logo} alt="logo" className="logo" />
          <h2>Lambda Quest</h2>

          <form onSubmit={this.handleLogin} className="lquestForm">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            ></input>

            <button type="submit">Login</button>
            {this.props.isLoggingIn
              ? "It's dangerous to go alone! Take this."
              : ""}
            {this.props.loggedIn
              ? `Welcome ${localStorage.getItem("Authorization")}`
              : ""}
            <p>
              Not Registered? Click <Link to="/register">here</Link>
            </p>
          </form>
        </div>
        <div className="intro">
          <p id="lambdaguy">Lambda Guy</p>
          <img src={guy} alt="guy" id="guy" />
          <img src={pete} alt="" id="pete" />
          <p id="pete-name"> Pete</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { login })(Login);
