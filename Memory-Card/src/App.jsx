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
  const [gameResults, setGameResults] = useState(""); //win or lose

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

  const cardShuffle = () => {
    const pokemonArray = [...pokemonCards];
    const shuffledPokemon = [];
    while (pokemonArray.length) {
      const index = Math.floor(Math.random() * pokemonArray.length);
      const pokemonCard = pokemonArray[index];
      shuffledPokemon.push(pokemonCard);
      pokemonArray.splice(index, 1);
    }
    setPokemonCards(shuffledPokemon);
  };

  const handleCardClick = (clickedCard) => {
    const clickedCards = pokemonCards.filter(
      (card) => card.clicked === true
    ).length;
    console.log(`Pokemon ${clickedCard.name} was clicked`);
    if (clickedCard.clicked === false) {
      clickedCard.clicked = true;
      cardShuffle();
      if (clickedCards === mode - 1) {
        setGameOver(true);
        setGameResults("win");
      }
    } else if (clickedCard.clicked === true) {
      setGameOver(true);
      setGameResults("lose");
    }
  };

  return (
    <>
      <h1 id="title">Pokémon Memory Game</h1>
      {gameOver ? (
        <GameOver gameResults={gameResults} />
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
