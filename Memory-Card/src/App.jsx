import "../src/styles/App.css";
import { useState, useEffect } from "react";
import StartUp from "./components/StartUp";
import ScoreBoard from "./components/ScoreBoard";
import Pokemon from "./components/Pokemon";
import GameOver from "./components/GameOver";
import Button from "./components/Button";

function App() {
  const getHighScoreKey = (mode) => `highScore_${mode}`;

  const [mode, setMode] = useState(0); // easy, medium or hard (5, 10, 20);
  const [gameStarted, setGameStarted] = useState(false); // true or false, has the game begun
  const [pokemonCards, setPokemonCards] = useState([]); // hold the fetched pokemon
  const [currentScore, setCurrentScore] = useState(0); // current score
  const [highScore, setHighScore] = useState(0); // current score

  const [gameOver, setGameOver] = useState(false); // check if game is won
  const [gameResults, setGameResults] = useState(""); //win or lose

  const handleStart = (mode) => {
    setMode(mode);
    setGameStarted(true);
    const modeHighScore =
      JSON.parse(localStorage.getItem(getHighScoreKey(mode))) || 0;
    setHighScore(modeHighScore);
  };

  const handlePokemonCards = (newPokemon) => {
    setPokemonCards(newPokemon);
  };

  const handleScores = () => {
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
    if (currentScore >= highScore) {
      setHighScore((prevHighScore) => prevHighScore + 1);
    }

    const currentModeHighScore =
      JSON.parse(localStorage.getItem(getHighScoreKey(mode))) || 0;
    if (currentScore >= currentModeHighScore) {
      localStorage.setItem(
        getHighScoreKey(mode),
        JSON.stringify(currentScore + 1)
      );
      setHighScore(currentScore + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("highScore", JSON.stringify(highScore));
  }, [highScore]);

  useEffect(() => {
    const highScore = JSON.parse(localStorage.getItem("highScore"));
    if (highScore) {
      setHighScore(highScore);
    }
  }, []);

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
      handleScores();

      if (clickedCards === mode - 1) {
        handleScores();
        setGameOver(true);
        setGameResults("win");
      }
    } else if (clickedCard.clicked === true) {
      setGameOver(true);
      setGameResults("lose");
    }
  };

  const handleRestartClick = () => {
    window.location.reload();
  };

  return (
    <>
      <h1 id="title">Pokémon Memory Game</h1>
      {gameOver ? (
        <>
          <ScoreBoard currentScore={currentScore} highScore={highScore} />
          <GameOver gameResults={gameResults} />
        </>
      ) : !gameStarted ? (
        <StartUp onStart={handleStart} />
      ) : (
        <>
          <ScoreBoard currentScore={currentScore} highScore={highScore} />
          <Pokemon
            mode={mode}
            pokemons={pokemonCards}
            onPokemonSetUp={handlePokemonCards}
            onCardClick={handleCardClick}
          />
          <Button
            className="btn"
            type="submit"
            text="Restart"
            handleClick={handleRestartClick}
          />
        </>
      )}
    </>
  );
}

export default App;
