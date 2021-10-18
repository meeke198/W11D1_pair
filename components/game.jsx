import React from "react";
import * as Minesweeper from "../minesweeper"
class Game extends React.Component {
  constructor(props) {
      console.log("this is props", props);
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9),
    };
    this.updateGame = this.updateGame.bind(this);
  }
  updateGame(){

  }
  render(){
      return(
          <div>
              <Board board = {this.state.board} update = {this.updateGame} />
              <p>{console.log("inside render", this)}</p>
            {/* <p>react is working</p> */}
          </div>
      )
  }
}
export default Game;