import GameBoardSingle from "./GameBoardSingle";
import React from "react";

const Singleplayer = (props) => {


    return <>
        <GameBoardSingle
            getScore={props.getScore}
            newGame={props.newGame}
            setWinner={props.setWinner}
            player1={props.player1}
            player2={props.player2}
        />
    </>
}


export default Singleplayer;