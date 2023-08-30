import "../src/styles/App.css";
import { useState } from "react";
// import Button from "./components/Button";
import Game from "./components/Game";
import StartUp from "./components/StartUp";

function App() {
  const [mode, setMode] = useState(0); // easy, medium or hard (5, 10, 20);
  const [gameStarted, setGameStarted] = useState(false); // true or false, has the game begun
  const [pokemonCards, setPokemonCards] = useState([]); // hold the fetched pokemon
  const [currentScore, setCurrentScore] = useState("0"); // current score
  const [highScore, setHighScore] = useState("0"); // high score
  const [gameOver, setGameOver] = useState(false); // check if game is won

  const handleStart = (mode) => {
    setMode(mode);
    setGameStarted(true);
  };

  return (
    <>
      <h1 id="title">Pokémon Memory Game</h1>
      {gameStarted ? <Game mode={mode} /> : <StartUp onStart={handleStart} />}
    </>
  );
}

export default App;
