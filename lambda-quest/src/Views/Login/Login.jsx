import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
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
      bgmusic: true,
      loading: false
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
    // this.setState({ loading: true });
    this.props.login(this.state.credentials)
      .then(() => {
          if(!this.props.error) {
            this.setState({ loading: false })
            this.props.history.push("/game");
          }
          this.props.history.push("/game");
      })
      .catch(err => console.log(err));
  };

  musictoggle = () => {
    this.setState({ bgmusic: !this.state.bgmusic });
    console.log(this.state.bgmusic);
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loginPage">
          <Loader type="Grid" color="yellowgreen" height={80} width={80} />
        </div>
      );
    } else {
      return (
        <div className="loginPage">
          {this.state.bgmusic === true ? <LoginSound /> : ""}
          {/* mutebutton */}
          <div className="mute-container" onClick={this.musictoggle}>
            {this.state.bgmusic ? (
              <img src={unmute} alt="" id="unmute" />
            ) : (
              <img src={mute} alt="" id="mute" />
            )}
          </div>

          <div className="loginContainer">
            <p>Welcome to</p>

            <img src={logo} alt="logo" className="logo" />
            <h2>Lambda Quest</h2>

            <form onSubmit={this.handleLogin} className="lquestForm">
              {this.props.error ? (
                <p style={{ fontSize: "8px", color: "red" }}>
                  Your username and password did not match or you may not be registered.
                </p>
              ) : (
                <p></p>
              )}
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
            <img src={pete} alt="" id="pete" className="bounce-5" />
            <p id="pete-name"> Pete</p>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggingIn: state.authReducer.loggingIn,
  loggedIn: state.loggedIn,
  error: state.authReducer.error
});

export default connect(mapStateToProps, { login })(Login);
