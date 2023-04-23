import classes from "./GameBoard.module.css";


const NewGameButton = (props) => {

    return <button className={classes.newGame} onClick={props.startNewGame}>New Game</button>
}

export default NewGameButton;