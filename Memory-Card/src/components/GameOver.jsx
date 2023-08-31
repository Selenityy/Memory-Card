import Button from "./Button";

const GameOver = ({ gameResults }) => {
  let gameEnding;

  const handleRestartClick = () => {
    window.location.reload();
  };

  if (gameResults === "win") {
    gameEnding = "Victory!";
  } else if (gameResults === "lose") {
    gameEnding = "You Lose";
  }

  return (
    <div id="gameOverScreen">
      <div id="gameEndingVariable">{gameEnding}</div>
      <p id="gameOverTitle">Game Over</p>
      <Button
        className="btn"
        type="submit"
        text="Restart"
        handleClick={handleRestartClick}
      />
    </div>
  );
};

export default GameOver;
