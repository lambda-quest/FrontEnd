import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { initGame } from "../../actions/gameActions";

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
        <div>
          <h1>LambdaQuest</h1>
          <div>
            <h3>Wecome, {name}</h3>
          </div>
        </div>
        <div></div>

        <p>{uuid}</p>
        <h4>You look around and see :</h4>
        {players}
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
