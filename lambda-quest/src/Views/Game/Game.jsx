import React, { Component } from "react";
//redux
import { connect } from "react-redux";
//proptypes
import PropTypes from "prop-types";
//actions
import { initGame } from "../../actions/gameActions";
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
    gamedata: PropTypes.object
  };

  state = {
    bgmusic: false
  };

  componentDidMount() {
    this.props.initGame();
  }

  musictoggle = () => {
    this.setState({ bgmusic: !this.state.bgmusic });
    console.log(this.state.bgmusic);
  };

  render() {
    const { uuid, players, title, description, name, id } = this.props.gamedata;
    console.log("Room in Game component");
    console.log(id);

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
          <Map title={title} activeRoom={this.props.gamedata.id} />

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
                    {/* <div className="whoIsHere"> */}
                    <h4>Students in this room:</h4>
                    <p>{players}</p>
                    {/* </div> */}
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
  gamedata: state.gameReducer.player
});

export default connect(mapStateToProps, { initGame })(Game);
