import { useState, useEffect } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard/Gameboard";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Rules from "./components/Rules/Rules";
import { useGameDetails } from "./context/GameLogic";
import { LandingModal } from "./components/LandingModal/LandingModal";
import { EndGameModal } from "./components/EndGameModal/EndGameModal";
import useHighscores from "./hooks/useHighscores";

function App() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [inputInlineError, setInputInlineError] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const { score, setScore } = useGameDetails();
  const { isHighscore, highscores, setHighscore } = useHighscores();

  useEffect(() => {
    if (countdown) {
      const interval = setInterval(() => {
        if (countdown <= 0) {
          return clearInterval(interval);
        }

        setCountdown(countdown - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countdown, score]);

  useEffect(() => {
    if (countdown === 0) {
      if (isHighscore({ name, score }) === true) setHighscore({ name, score });
      setShowEndGameModal(true);
    }
  }, [countdown]);

  const onEnter = (inputName) => {
    // if the user doesn't enter a name, show inline error message
    if (!inputName.length) {
      setInputInlineError(true);
      return;
    }
    setShowEndGameModal(false);
    setInputInlineError(false);

    // dismiss the modal and send the name to the scoreboard
    setName(inputName);
    setScore(0);
    setShowModal(false);
    setCountdown(90);
  };

  const showRulesComponent = () => {
    setShowRules(!showRules);
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      {showModal && (
        <LandingModal
          onEnter={onEnter}
          showRulesComponent={showRulesComponent}
          inputInlineError={inputInlineError}
        />
      )}
      {showEndGameModal && (
        <EndGameModal
          highscore={isHighscore({ name, score })}
          onEnter={onEnter}
          inputName={name}
          showRulesComponent={showRulesComponent}
        />
      )}
      <Gameboard />
      <div className="game-info">
        <Scoreboard name={name} timer={countdown} highscores={highscores} />
        <div className="button-container">
          <button className="show-rules-button" onClick={showRulesComponent}>
            Show Rules
          </button>
        </div>
      </div>
      {showRules && <Rules closeRulesModal={showRulesComponent} />}
    </div>
  );
}

export default App;
