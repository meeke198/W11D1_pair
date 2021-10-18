import React from "react";
import Tile from "./tile";

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>this is the board render</p>
                {(this.props.board.grid).map((row, id) => {
                    return (
                        < div key={id} >
                            {row.map((tile, tileId) => {
                                return (
                                    <div key={tileId}>
                                        <Tile tile={tile} update={this.props.update} />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
                }
            </div >
        )
    }
}

export default Board;



// {tabArray.map( (tabObject) => {
//     let {title, content} = tabObject;
//     return(
//         <li>
//             <Tabs.Header/>
//             <h1>
//                 {title}
//             </h1>
//             <article>
//                 {content}
//             </article>
//         </li>
//     )
// })}