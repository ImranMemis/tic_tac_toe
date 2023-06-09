import Navbar from "../UI/Navbar";
import {useState} from "react";
import Singleplayer from "./Singleplayer";
import Multiplayer from "./Multiplayer";


const Game = (props) =>  {

    const  [playerOnePoints, setPlayerOnePoints] = useState(0);
    const  [playerTwoPoints, setPlayerTwoPoints] = useState(0);
    const  [xIsNext, setXisNext] = useState(true);


    const getScore = (pl1, pl2) => {
        setPlayerOnePoints(playerOnePoints+pl1);
        setPlayerTwoPoints(playerTwoPoints+pl2);
    }



    const newGame = () =>{
        setPlayerOnePoints(0);
        setPlayerTwoPoints(0);
        props.setWinner("");
        props.startNewGame();
    }

    return (
        <div>
            <Navbar
            player1 = {props.player1}
            player2 = {props.player2}
            playerOnePoints = {playerOnePoints}
            playerTwoPoints = {playerTwoPoints}
            xIsNext={xIsNext}
            />
            {
                props.mode === "single" && <Singleplayer
                getScore={getScore}
                newGame={newGame}
                setWinner={props.setWinner}
                player1={props.player1}
                player2={props.player2}
                xIsNext={xIsNext}
                setXisNext={setXisNext}
                />
            }
            {
                props.mode === "multi" && <Multiplayer
                    getScore={getScore}
                    newGame={newGame}
                    setWinner={props.setWinner}
                    player1={props.player1}
                    player2={props.player2}
                    xIsNext={xIsNext}
                    setXisNext={setXisNext}
                />
            }
        </div>
    )
}

export default Game;