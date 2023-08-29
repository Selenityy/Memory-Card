import { useState } from "react";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";
import Pokemon from "./Pokemon";

function Game({ mode }) {
  const [currentScore, setCurrentScore] = useState("");
  const [highScore, setHighScore] = useState("");

  const handleRestartClick = () => {
    // insert code for restart
  };

  const handleCurrentScoreChange = (newCurrentScore) => {
    setCurrentScore(newCurrentScore);
  };

  const handleHighScoreChange = (newHighScore) => {
    setHighScore(newHighScore);
  };

  return (
    <>
      <h1 id="title">Pokémon Memory Game</h1>
      <div id="score-board">
        <ScoreBoard
          currentScore={currentScore}
          onCurrentScoreChange={handleCurrentScoreChange}
          highScore={highScore}
          onHighScoreChange={handleHighScoreChange}
        />
      </div>
      <div id="card-board">
        <Pokemon mode={mode} />
      </div>
      <div id="restart-button">
        <Button
          className="btn"
          type="submit"
          text="Restart"
          handleClick={handleRestartClick}
        />
      </div>
    </>
  );
}

export default Game;
