import React, { Component } from "react";
import { connect } from "react-redux";
import { movePlayer } from "../../../actions/gameActions";
import { initGame } from "../../../actions/gameActions";
import "../game.css";

class ControlPanel extends Component {
  state = {};

  movePlayer = direction => {
    console.log(direction);
    this.props.movePlayer({ direction });
    // this.props.initGame();
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto"
        }}
      >
        <h4 style={{ fontSize: "14px" }}>Where do you want to go next?</h4>
        <div className="lquestButtonContainer">
          <div
            className="lquestButton"
            onClick={() => this.movePlayer("n")}
          >
            North
          </div>
          <div className="lquestButton" onClick={() => this.movePlayer("e")}>
            East
          </div>
          <div className="lquestButton" onClick={() => this.movePlayer("s")}>
            South
          </div>
          <div className="lquestButton" onClick={() => this.movePlayer("w")}>
            West
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { movePlayer, initGame })(ControlPanel);
