import "../src/styles/App.css";
import { useState } from "react";
// import Game from "./components/Game";
import StartUp from "./components/StartUp";
import ScoreBoard from "./components/ScoreBoard";
import Pokemon from "./components/Pokemon";
import GameOver from "./components/GameOver";

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

  const handlePokemonCards = (newPokemon) => {
    setPokemonCards(newPokemon);
  };

  const handleCurrentScore = (newCurrentScore) => {
    setCurrentScore(newCurrentScore);
  };

  const handleHighScore = (newHighScore) => {
    setHighScore(newHighScore);
  };

  const handleGameOver = (gameState) => {
    setGameOver(gameState);
  };

  const handleCardClick = (cardName) => {
    console.log(`Pokemon ${cardName} clicked`);
  };

  return (
    <>
      <h1 id="title">Pokémon Memory Game</h1>
      {gameOver ? (
        <GameOver
          onGameOver={handleGameOver}
          gameOver={gameOver}
          currentScore={currentScore}
          mode={mode}
          clickedCard={pokemonCards}
        />
      ) : !gameStarted ? (
        <StartUp onStart={handleStart} />
      ) : (
        <>
          <ScoreBoard
            currentScore={currentScore}
            highScore={highScore}
            onCurrentScore={handleCurrentScore}
            onHighScore={handleHighScore}
          />
          <Pokemon
            mode={mode}
            pokemons={pokemonCards}
            onPokemonSetUp={handlePokemonCards}
            onCardClick={handleCardClick}
          />
        </>
      )}
    </>
  );
}

export default App;
