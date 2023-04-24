import "./Navbar.css";


const Navbar = (props) => {

    let playerTwo = "";

    if(props.player2 === ""){
        playerTwo = "CPU";
    }else{
        playerTwo = props.player2;
    }

    return <div>
        <div className={`player1 ${props.xIsNext ? "turn" : ""}`}>{props.player1}: {props.playerOnePoints}</div>
        <div className={`player2 ${!props.xIsNext ? "turn" : ""}`}>{playerTwo}: {props.playerTwoPoints}</div>
    </div>
}

export default Navbar;