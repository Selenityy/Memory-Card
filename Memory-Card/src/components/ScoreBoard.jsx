import { useState } from "react";

function ScoreBoard({
  currentScore,
  onCurrentScoreChange,
  highScore,
  onHighScoreChange,
}) {
  const [currentScoreTracked, setCurrentScoreTracked] = useState("0");
  const [highScoreTracked, setHighScoreTracked] = useState("0");

  const handleCurrentScoreChange = () => {
    setCurrentScoreTracked("1");
    onCurrentScoreChange(currentScoreTracked);
  };

  const handleHighScoreChange = () => {
    setHighScoreTracked("1");
    onHighScoreChange(highScoreTracked);
  };

  //   on card button click, the handles fire

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
