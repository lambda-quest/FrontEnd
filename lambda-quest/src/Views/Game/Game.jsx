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

  componentDidMount() {
    this.props.initGame();
    this.props.getPlayers();
  }

  // refreshmap =()=>{
  //   window.location.reload(true)
  // }

  musictoggle = () => {
    this.setState({ bgmusic: !this.state.bgmusic });
    console.log(this.state.bgmusic);
  };

  startGame = () => {
    this.setState({ started: !this.state.started });
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

        <div className="mazecontainer">
          {/* {this.state.started ? (
            <button onClick={this.startGame()}>Start Game</button>
          ) : ( */}
          <div>
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

            <ControlPanel />
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
                    {this.props.peopledata.map(peeps => (
                      <p>{peeps.id}</p>
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
  peopledata: state.gameReducer.otherpeople
});

export default connect(mapStateToProps, { initGame, getPlayers })(Game);
