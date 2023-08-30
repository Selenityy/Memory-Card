import { useState } from "react";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";
import Pokemon from "./Pokemon";

function Game({ mode }) {
  const [pokemons, setPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleRestartClick = () => {
    window.location.reload();
  };

  const handlePokemonSetUp = (newPokemons) => {
    setPokemons([newPokemons]);
  };

  //   const handleCardClick = (clickedCardId) => {
  //     // Updated logic to track clicks
  //     const updatedPokemons = pokemons.map((pokemon) =>
  //       pokemon.id === clickedCardId ? { ...pokemon, clicked: true } : pokemon
  //     );
  //     setPokemons(updatedPokemons);

  //     const clickedPokemon = pokemons.find(
  //       (pokemon) => pokemon.id === clickedCardId
  //     );
  //     if (clickedPokemon.clicked) {
  //       //reset game
  //       setHighScore(currentScore);
  //       handleRestartClick();
  //     } else {
  //       // Update current score and high score
  //       const newCurrentScore = currentScore + 1;
  //       setCurrentScore(newCurrentScore);

  //       if (newCurrentScore > highScore) {
  //         setHighScore(newCurrentScore);
  //       }
  //     }
  //   };

  return (
    <div id="ongoingGame">
      <h1 id="title">Pokémon Memory Game</h1>
      <div id="score-board">
        <ScoreBoard currentScore={currentScore} highScore={highScore} />
      </div>
      <div id="card-board">
        <Pokemon
          mode={mode}
          pokemons={pokemons}
          onPokemonSetUp={handlePokemonSetUp}
        //   onCardClick={handleCardClick}
        />
      </div>
      <div id="restart-button">
        <Button
          className="btn"
          type="submit"
          text="Restart"
          handleClick={handleRestartClick}
        />
      </div>
    </div>
  );
}

export default Game;
