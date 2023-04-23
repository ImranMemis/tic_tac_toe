import classes from "./Login.module.css";
import {useState} from "react";


const Login = (props) =>  {

    const [gameStarting, setGameStarting] = useState(false);

    const singleMode = () => {
        props.setMode("single");
        props.setLogin(false);
        setGameStarting(false);
    }

    const multiPlayer = () => {
        props.setMode("multi");
        props.setLogin(false);
        setGameStarting(false);
    }

    const playerChangeHandler = (event) => {
        props.setPlayer1(event.target.value);
    }

    const player2ChangeHandler = (event) => {
        props.setPlayer2(event.target.value);
    }

    const gameStart = () => {
        let isEmpty = false;
        if(props.mode==="single"){
            if(props.player1.trim().length === 0){
                props.setPlayer1("Can't be empty");
                isEmpty = true;
            }
        }
        if(props.mode==="multi"){
            if(props.player1.trim().length === 0){
                props.setPlayer1("Can't be empty");
                isEmpty = true;
            }
            if(props.player2.trim().length === 0){
                props.setPlayer2("Can't be empty");
                isEmpty = true;
            }

        }

        if (isEmpty) return;
        props.setLogin(false);
        props.setGameStarted(true);
        setGameStarting(true);
    }

    return(
        <>
    { props.login && <div>
        <h2 className={classes.mode}>Select mode</h2>
        <button className={classes.modebtn} onClick={singleMode}>Single player</button>
        <button className={classes.modebtn} onClick={multiPlayer}>Multiplayer</button>
    </div>
    }
    {  props.mode === "single" && !gameStarting && <div className={classes.table}>
        <div className={classes.singleLabel}>Single Player</div>
        <br/>
        <div className={classes.nameLabel}>Your Name</div>
        <br/>
        <input
            className={classes.playerInput}
            type='text'
            value={props.player1}
            onChange={playerChangeHandler}
        />
        <br/>
        <button className={classes.start} onClick={gameStart}>Start</button>
        </div>
    }
    {
        props.mode === "multi" && !gameStarting && <div className={classes.table}>
            <div className={classes.singleLabel}>Multiplayer</div>
            <br/>
            <div className={classes.nameLabel}>Player one Name</div>
            <br/>
            <input
                className={classes.playerInput}
                type='text'
                value={props.player1}
                onChange={playerChangeHandler}
            />
            <div className={classes.nameLabel}>Player two Name</div>
            <br/>
            <input
                className={classes.playerInput}
                type='text'
                value={props.player2}
                onChange={player2ChangeHandler}
            />
            <br/>
            <button className={classes.start} onClick={gameStart}>Start</button>
        </div>
    }
        </>
    )
}


export default Login