import './App.css';
import {useState} from "react";
import Login from "./components/UI/Login";
import Game from "./components/GameModes/Game";
import Endgame from "./components/UI/Endgame";

function App() {

  const [login, setLogin] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [mode, setMode] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState("");
  const [loginPage, setLoginPage] = useState(true);

  const startNewGame = () =>{
    setPlayer1("");
    setPlayer2("");
    setLogin(true);
    setLoginPage(true);
    setGameStarted(false);
    setWinner("");
  }

  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
        {loginPage && <Login
                login = {login}
                setLogin = {setLogin}
                player1 = {player1}
                setPlayer1 = {setPlayer1}
                player2 = {player2}
                setPlayer2 = {setPlayer2}
                mode = {mode}
                setMode = {setMode}
                setGameStarted = {setGameStarted}
                setLoginPage={setLoginPage}
            />}
        {
            gameStarted && <Game
              player1 = {player1}
              player2 = {player2}
              mode={mode}
              startNewGame = {startNewGame}
              setWinner = {setWinner}
            />
        }
        {
          winner && <Endgame
              winner={winner}
            />
        }
    </div>
  );
}

export default App;
