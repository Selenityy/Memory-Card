import "../src/styles/App.css";
import { useState } from "react";
import Button from "./components/Button";
import Game from "./components/Game";

function App() {
  const [mode, setMode] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartClick = () => {
    setGameStarted(true);
  };

  const handleModeClick = (selectedMode) => {
    setMode(selectedMode);
  };

  return (
    <>
      {!gameStarted && (
        <div id="beginGame">
          <h1 id="title">Pokémon Memory Game</h1>
          <p>Pick your mode:</p>
          <Button
            className="modeBtn"
            type="submit"
            text="Easy"
            handleClick={() => handleModeClick("easy")}
          />
          <Button
            className="modeBtn"
            type="submit"
            text="Medium"
            handleClick={() => handleModeClick("medium")}
          />
          <Button
            className="modeBtn"
            type="submit"
            text="Hard"
            handleClick={() => handleModeClick("hard")}
          />
          <div id="start-button">
            <Button
              className="btn"
              type="submit"
              text="Start"
              handleClick={handleStartClick}
            />
          </div>
        </div>
      )}
      {gameStarted && <Game mode={mode} />}
    </>
  );
}

export default App;
