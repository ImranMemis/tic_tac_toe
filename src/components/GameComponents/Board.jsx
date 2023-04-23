import classes from "./Board.module.css"


const Board = (props) => {


    return(
    <div className={classes.main}>
        <div className={classes.board} {...props}>
        </div>
    </div>
    )
}

export default Board;