import { useState } from "react";
import Button from "./Button";

function StartUp({ onStart }) {
  //how many cards to show
  const easyMode = 5;
  const mediumMode = 10;
  const hardMode = 20;

  const [selectedMode, setSelectedMode] = useState(0);

  const handlePickMode = (mode) => {
    setSelectedMode(mode);
  };

  const handleStartClick = () => {
    onStart(selectedMode);
  };

  return (
    <div id="modeOptions">
      <p>Pick your mode:</p>
      <Button
        className="modeBtn"
        type="submit"
        text="Easy"
        handleClick={() => handlePickMode(easyMode)}
      />
      <Button
        className="modeBtn"
        type="submit"
        text="Medium"
        handleClick={() => handlePickMode(mediumMode)}
      />
      <Button
        className="modeBtn"
        type="submit"
        text="Hard"
        handleClick={() => handlePickMode(hardMode)}
      />
      <div id="start-button">
        <Button
          className="btn"
          type="submit"
          text="Start"
          onClick={handleStartClick}
        />
      </div>
    </div>
  );
}

export default StartUp;
