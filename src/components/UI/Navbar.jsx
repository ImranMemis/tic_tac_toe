import classes from "./Navbar.module.css";

const Navbar = (props) => {
    let playerTwo = "";

    if(props.player2 === ""){
        playerTwo = "CPU";
    }else{
        playerTwo = props.player2;
    }

    return <div>
        <div className={classes.player1}>{props.player1}: {props.playerOnePoints}</div>
        <div className={classes.player2}>{playerTwo}: {props.playerTwoPoints}</div>
    </div>
}

export default Navbar;