import React from "react";
import * as Minesweeper from "../minesweeper"
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9),
    };
  }
  updateGame(){

  }
  render(){
      return(
          <div>

          </div>
      )
  }
}
