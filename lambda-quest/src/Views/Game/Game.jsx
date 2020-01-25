import React, { Component } from "react";
//redux
import { connect } from "react-redux";
//proptypes
import PropTypes from "prop-types";
//actions
import { initGame } from "../../actions/gameActions";
import { getPlayers } from "../../actions/gameActions";
//styling
import "./game.css";
//assetts
import logo from "../../assets/logo1.JPG";
import guy from "../../assets/lambdadudeNoBg.png";
import mute from "../../assets/mute-removebg.png";
import unmute from "../../assets/unmute-removebg.png";
//audio
// import gameSound from "../../assets/gameaudio.mp3";
//components
import GameSound from "../Game/GameComponents/GameSound";
import Chatbox from "../Game/GameComponents/Chatbox";
//bootstrap
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Room from "./GameComponents/Room";
import ControlPanel from "./GameComponents/ControlPanel";
import Map from "./GameComponents/Map";

class Game extends Component {
  static propTypes = {
    gamedata: PropTypes.object,
    otherpeople: PropTypes.array
  };

  state = {
    bgmusic: false,
    started: false
  };

  musictoggle = () => {
    this.setState({ bgmusic: !this.state.bgmusic });
    console.log(this.state.bgmusic);
  };

  startGame = () => {
    this.setState({ started: !this.state.started });
  };

  bugcount = () => {
    this.setState({ bugs: this.state.bugs - 1 });
  };

  render() {
    const { uuid, players, title, description, name, id } = this.props.gamedata;

    // const {id } = this.props.peopledata
    console.log("Room in Game component");
    console.log(id);
    console.log(this.props.peopledata);

    return (
      <div className="gamePage">
        {this.state.bgmusic ? <GameSound /> : ""}

        <div className="mute-container" onClick={this.musictoggle}>
          {this.state.bgmusic ? (
            <img src={unmute} alt="" className="unmute" />
          ) : (
            <img src={mute} alt="" className="mute" />
          )}
        </div>

        <div className="gamebanner">
          <img src={logo} alt="" className="logo" />
          <h1 className="lquestTitle">Lambda Quest</h1>
        </div>
        <h3>Welcome, {name}</h3>
        <div className="instructions">
          <p style={{padding:'20px 0'}}>You are SOOO close to finishing your project, Lambda Guy!</p>

          <p style={{padding:'20px 0'}}>
            Each Room represents a line of code that has a bug, except for one,
            where the solution to MVP is hiding. Try to get to MVP before the
            bug tracker gets to 0.
          </p>
          <p style={{padding:'20px 0'}}>MVP changes with each new game.</p>
          <p style={{color:'red', padding:'20px 0'}}>**Look for error messages to help guide you to the solution.**</p>
          <p>
            A type error means you're close, a Stack overflow means you're
            getting further away. No error message mean's you're not even in the
            ballpark!
          </p>
        </div>
        <div className="mazecontainer">
          {/* {this.state.started ? (
            <button onClick={this.startGame()}>Start Game</button>
          ) : ( */}
          <div>
            <p>If the map is empty, click RELOAD</p>
            <Map title={title} activeRoom={this.props.gamedata.id} />
            {!this.state.started && (
              <button onClick={() => window.location.reload(true)}>
                RELOAD
              </button>
            )}
          </div>

          {/* )} */}

          {/* ROOM Component */}
          <div className="lquestRoom css-typing">
            {/* <p>{uuid}</p> */}

            <h3 className="lquestRoomName">You are in room {id}</h3>
            <h4 className="lquestDesc">{description}</h4>
            <img src={guy} alt="" className="guy" />

            <ControlPanel
              bugs={this.state.bugs}
              activeRoom={this.props.gamedata.id}
            />
          </div>

          <div className="rightsidecontainer">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Who's Here?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="whoIsHere">
                    <h4>Students in this room:</h4>
                    {this.props.peopledata
                      .filter(
                        person => person.currentRoom === this.props.gamedata.id
                      )
                      .map(peeps => (
                        <p>anonymous_user {peeps.id}</p>
                      ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion defaultActiveKey="0" className="chatroom">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Chat
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="chatbox">
                      <Chatbox props={this.props.gamedata} />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        {/* Room Component */}
        <Room />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //name_of_state: state.reducerfilename.item_in_state
  gamedata: state.gameReducer.player,
  peopledata: state.gameReducer.otherpeople,
  rooms: state.gameReducer.rooms,
});

export default connect(mapStateToProps, { initGame, getPlayers })(Game);
