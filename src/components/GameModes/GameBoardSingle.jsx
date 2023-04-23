import Square from "../GameComponents/Square";
import Board from "../GameComponents/Board";
import {useCallback, useEffect, useState} from "react";
import NewGameButton from "./NewGameButton";
import RetryButton from "./RetryButton";

const defaultSquares = () => (new Array(9)).fill(null);
const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
]



const GameBoardSingle = ({getScore, newGame, setWinner, player2, player1}) =>{

    const  [squares, setSquares] = useState(defaultSquares());
    const  [gameOver,setGameOver] = useState(false);

    const handleSquareClick = (index) => {
        if(gameOver){
            return;
        }
        const isPlayerTurn = squares.filter(square=> square !== null).length % 2 === 0;
        if(isPlayerTurn){
            let newSquares = squares;
            if(newSquares[index] !== null) return;
            newSquares[index] = 'x';
            setSquares([...newSquares])
            calculateWinner(squares);
        }
    }

    const calculateWinner = useCallback((squares) =>{
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
                    if(player2===""){
                        setWinner("CPU");
                    }
                    return;
                }
            }
        }

    }, [getScore, player1, player2, setWinner])

    useEffect(()=>{
        if(gameOver){
            return;
        }
        const isComputerTurn = squares.filter(square=> square !== null).length % 2 === 1;

        const putComputerAt = index => {
            let newSquares = squares;
            newSquares[index] = 'o';
            setSquares([...newSquares]);
        }

        if(isComputerTurn){
            const emptyIndexes = squares.map((square, index) => square === null ? index : null).filter(val => val !== null);
            if(emptyIndexes.length === 0) return;
            const randomIndex = emptyIndexes[ Math.ceil(Math.random() * emptyIndexes.length)]
            putComputerAt(randomIndex);
            calculateWinner(squares);
        }

    }, [squares, gameOver, calculateWinner]);

    const startNewGame = () =>{
        setSquares(defaultSquares());
        newGame();
        setGameOver(false);

    }

    const startOver = () =>{
        setSquares(defaultSquares);
        setGameOver(false);
        setWinner("");
    }

    return(<div>
        <Board>
            {squares.map((square, index) => <Square
                key={index}
                x={square==='x'?1:0}
                o={square==='o'?1:0}
                onClick = {() => handleSquareClick(index)}
            />)}
        </Board>
            {
                gameOver && <NewGameButton startNewGame={startNewGame}/>            }
            <br/>
            {
                gameOver && <RetryButton startOver={startOver}/>
            }
        </div>

    )
}

export default GameBoardSingle;