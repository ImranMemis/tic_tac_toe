import GameBoardMulti from "./GameBoardMulti";
import React from "react";


const Multiplayer = (props) => {


    return <>
        <GameBoardMulti
            getScore={props.getScore}
            newGame={props.newGame}
            setWinner={props.setWinner}
            player1={props.player1}
            player2={props.player2}
        />
    </>
}


export default Multiplayer;