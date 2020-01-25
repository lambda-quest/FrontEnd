import React, { Component } from "react";
import { connect } from "react-redux";
import { getRooms, initGame, getPlayers } from "../../../actions/gameActions";
//components

//bootstrap
// import Table from "react-bootstrap/Table";
//stying
import "../game.css";
//assetts
// import dude from "../../../assets/lambdadudeNoBg.png";

class Map extends Component {
 
    state = {
      activeRoom: this.props.activeRoom,
      bugs:0,
    }
  

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.initGame();
    // }, 500)
    // setTimeout(() => {
    //   this.props.getPlayers();
    // }, 1000)
    // setTimeout(() => {
    //   this.props.getRooms();
    // }, 1500)
    this.props.initGame().then(this.props.getPlayers()).then(this.props.getRooms())
  }

  render() {
    // console.log("Map");
    // console.log(this.props.rooms);
    console.log("Room inside Map component");
    console.log(this.props);
    console.log(this.props.activeRoom);
    return (
      <div className="gameboard-container">
        <div className="lquestMap">
          {this.props.rooms.sort((a,b) =>a.id - b.id).map(room => {
            return (
              <div
                key={room.id}
                className={
                  room.id === this.props.activeRoom
                    ? "lquestMapRoomActive"
                    : "lquestMapRoom"
                }
              >
                
                <p className='room'>{room.id}</p>
                
               
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //name_of_state: state.reducerfilename.item_in_state
  rooms: state.gameReducer.rooms,
  gamedata: state.gameReducer.player,
  peopledata: state.gameReducer.otherpeople
});

export default connect(mapStateToProps, { getRooms, initGame, getPlayers })(Map);
