import React, { Component } from "react";
import { connect } from "react-redux";
import { movePlayer } from "../../../actions/gameActions";
import { initGame } from "../../../actions/gameActions";
import "../game.css";

class ControlPanel extends Component {
  state = {
    rando: 1,
    bugs:25,
    gameOn:false
  };

  setRando=()=>{
    this.setState({ rando: Math.round(Math.random() * 100), bugs: 25, gameOn: !this.state.gameOn })
    
  }

  north=()=>{
    
    this.bugcount()
    this.movePlayer("n")
  }

  south=()=>{
    this.bugcount()
    this.movePlayer("s")
  }

  east=()=>{
    this.bugcount()
    this.movePlayer("e")
  }

  west=()=>{
    this.bugcount()
    this.movePlayer("w")
  }

  bugcount = () =>{
    this.setState({ bugs: this.state.bugs - 1 })
  }

  movePlayer = direction => {
    console.log(direction);
    this.props.movePlayer({ direction });
    // this.props.initGame();
  };

  render() {

    console.log(`rando: ${this.state.rando}`)
    console.log(`gameOn: ${this.state.gameOn}`)
    
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto"
        }}
      >
        <div className={this.state.gameOn===false? 'errorsOff':''}>
        <div className='bug'>
{this.props.activeRoom === this.state.rando +1 || this.props.activeRoom === this.state.rando -1 ||this.props.activeRoom === this.state.rando +10 ||this.props.activeRoom === this.state.rando -10 ||this.props.activeRoom === this.state.rando +11 || this.props.activeRoom === this.state.rando +9  ? ' Parsing error: Unexpected token': ''}
       
        {this.props.activeRoom === this.state.rando +2 || this.props.activeRoom === this.state.rando -2 ||this.props.activeRoom === this.state.rando +11 ||this.props.activeRoom === this.state.rando -11 ||this.props.activeRoom === this.state.rando +12 || this.props.activeRoom === this.state.rando +10  ? `Cannot read property 'map' of undefined`: ''}
        
        {this.props.activeRoom === this.state.rando +3 || this.props.activeRoom === this.state.rando -3 ||this.props.activeRoom === this.state.rando +12 ||this.props.activeRoom === this.state.rando -12 ||this.props.activeRoom === this.state.rando +13 || this.props.activeRoom === this.state.rando +10  ? `Uncaught RangeError: Maximum call stack size exceeded
           at recurse(<anonymous>:2:4)`: ''}
</div>
        </div>

        
        

        <h3>Bugs:{this.state.bugs}</h3>
        
      <div onClick={ ()=>this.setRando()} className={this.state.bugs===0 ? 'end': 'start'}>
        {this.state.bugs ===0? <span><h4>You Flex!</h4> <p>play again?</p>
        </span> : this.props.activeRoom === this.state.rando? <span><h4>You Pass!</h4> <p>{this.state.bugs >=10? 'Your TL gives you a 3!': 'your TL gives you a 2 '}</p> <p>play again?</p></span> : this.state.bugs <= 25 && this.state.gameOn ? 'Code!': 'Start'}</div>
      
        <h4 style={{ fontSize: "14px" }}>Where do you want to go next?</h4>
        <div className="lquestButtonContainer">
          <div
            className="lquestButton"
            onClick={() => this.north()}
          >
            North
          </div>
          <div className="lquestButton" onClick={() => this.east()}>
            East
          </div>
          <div className="lquestButton" onClick={() => this.south()}>
            South
          </div>
          <div className="lquestButton" onClick={() => this.west()}>
            West
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { movePlayer, initGame })(ControlPanel);
