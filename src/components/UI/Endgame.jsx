import classes from "./Endgame.module.css"

const Endgame = (props) => {

    return <div className={classes.winners}>
    {props.winner ==="draw" ? <h1>{props.winner}!</h1> : <h1>{props.winner} WON!</h1>}
    </div>
}


export default Endgame;