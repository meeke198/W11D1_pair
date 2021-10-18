import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9),
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame} />
        {/* <p>react is working</p> */}
      </div>
    )
  }
}
export default Game;

/*
the parent class has information to give to the child
that information is a prop to the child
  the information in the parent itself can change and be passed as a prop

  Board is a child of game - you pass an object with {board, update}

  update game is bound to this
    allows the context to be bound when it's finally used in tile later on
    at that point, what will "this" be? tile? or will the context still be game?
      likely game - because the game state is what is eventually bein update and rerendered

*/