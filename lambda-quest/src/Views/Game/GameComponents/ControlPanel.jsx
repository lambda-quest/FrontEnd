import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { movePlayer } from "../../../actions/gameActions"

class ControlPanel extends Component {
  state = {};

  movePlayer = direction => {
   const way = {direction: direction}
   this.props.movePlayer(way)
 }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", margin: "auto", maxWidth: "300px"}}>
        <h4>ControlPanel</h4>
        <div style={{maxWidth: "300px"}}>
         <Button variant="primary" onClick={() => this.movePlayer("n")}>North</Button>
         <Button variant="primary" onClick={() => this.movePlayer("e")}>East</Button>
         <Button variant="primary" onClick={() => this.movePlayer("s")}>South</Button>
         <Button variant="primary" onClick={() => this.movePlayer("w")}>West</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { movePlayer })(ControlPanel);
