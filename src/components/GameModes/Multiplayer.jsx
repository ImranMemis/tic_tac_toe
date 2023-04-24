import Square from "../GameComponents/Square";
import Board from "../GameComponents/Board";
import {useState} from "react";
import NewGameButton from "./NewGameButton";
import RetryButton from "./RetryButton";

const defaultSquares = () => (new Array(9)).fill(null);
const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
]


const Multiplayer = ({getScore, newGame, setWinner, player2, player1, xIsNext, setXisNext}) =>{

    const  [squares, setSquares] = useState(defaultSquares());
    const  [gameOver,setGameOver] = useState(false);
    const  [availableSquares, setAvailableSquares] = useState(9);


    const handleSquareClick = (index) => {
        if(gameOver){
            return;
        }
        if(xIsNext){
            let newSquares = squares;
            if(newSquares[index] !== null) return;
            newSquares[index] = 'x';
            setSquares([...newSquares])
            calculateWinner(squares);
            setXisNext(false);
        }else{
            let newSquares = squares;
            if(newSquares[index] !== null) return;
            newSquares[index] = 'o';
            setSquares([...newSquares])
            calculateWinner(squares);
            setXisNext(true);
        }
        setAvailableSquares((prevState) =>{
            return prevState - 1;
        })
    }
    const calculateWinner = (squares) =>{
        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                if (squares[a] === "x") {
                    getScore(1,0);
                    setGameOver(true);
                    setWinner(player1);
                    return;
                }else if(squares[a] === "o"){
                    getScore(0,1);
                    setGameOver(true);
                    setWinner(player2);
                    return;
                }
            }
        }
        if(availableSquares === 1){
            setGameOver(true);
        }
    }

    const startNewGame = () =>{
        setSquares(defaultSquares());
        newGame();
        setGameOver(false);

    }

    const startOver = () =>{
        setSquares(defaultSquares);
        setGameOver(false);
        setWinner("");
        setXisNext(true);
        setAvailableSquares(9);
    }

    return(
        <div>
            <Board>
                {squares.map((square, index) => <Square
                    key={index}
                    x={square==='x'?1:0}
                    o={square==='o'?1:0}
                    onClick = {() => handleSquareClick(index)}
                />)}
            </Board>
            {
                gameOver && <NewGameButton startNewGame = {startNewGame}/>
            }
            <br/>
            {
                gameOver && <RetryButton startOver={startOver}/>
            }
        </div>
    )
}

export default Multiplayer;