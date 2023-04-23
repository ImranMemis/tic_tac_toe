import classes from "./GameBoard.module.css";


const RetryButton = (props) =>{


    return <button className={classes.retry} onClick={props.startOver}>Retry</button>
}

export default RetryButton;