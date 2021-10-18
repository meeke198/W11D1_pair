import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if (this.props.tile.explored) {
      if (this.props.tile.bombed) {
        return (
          <div>
            <p>B</p>
          </div>
        );
      } else {
        return (
          <div>
            <p>E</p>
          </div>
        );
      }
    } else if (this.props.tile.flagged) {
      return (
        <div>
          <p>F</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>T</p>
        </div>
      );
    }
  }
}

export default Tile;
// this.board = board;
// this.pos = pos;
// this.bombed = false;
// this.explored = false;
// this.flagged = false;
