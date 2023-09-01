import "../styles/ScoreBoard.css";

function ScoreBoard({ currentScore, highScore }) {
  return (
    <>
      <h2 id="current-score" className="scores">
        Current Score: {currentScore}
      </h2>
      <h2 id="high-score" className="scores">
        High Score: {highScore}
      </h2>
    </>
  );
}

export default ScoreBoard;
