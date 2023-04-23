import classes from "./Endgame.module.css"

const Endgame = (props) => {

    return <div className={classes.winners}>
     <h1>{props.winner} WON!</h1> :
    </div>
}


export default Endgame;