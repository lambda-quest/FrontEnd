import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { initGame } from "../../actions/gameActions";
import "./game.css";
import logo from "../../assets/logo.jpg";

class Game extends Component {
  static propTypes = {
    gamedata: PropTypes.object
  };

  componentDidMount() {
    this.props.initGame();
  }

  render() {
    const { uuid, players, title, description, name } = this.props.gamedata;

    return (
      <>
        <div className="gamebanner">
          <img src={logo} alt="" className="logo" />
          <h1 className="lquestTitle">LambdaQuest</h1>
          <h3>Wecome, {name}</h3>
        </div>
        <div className='whoIsHere'>
          <h4>Student in this room:</h4>
          <p>{players}</p>
        </div>

        <p>{uuid}</p>

        <h4>{title}</h4>
        <h4>{description}</h4>
        {console.log(players)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  //name_of_state: state.reducerfilename.item_in_state
  gamedata: state.gameReducer.players
});

export default connect(mapStateToProps, { initGame })(Game);
