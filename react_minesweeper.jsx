import Game from "./components/game";
import React from "react"; //include React
import ReactDOM from "react-dom"; //give access to ReactDOM



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Game />, root);
});