import { useState, useEffect } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";
import { GameContextProvider } from "./context/GameLogic";
import { Modal } from "./components/Modal";
import Rules from "./components/Rules";
import { useGameDetails } from "./context/GameLogic";

function App() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [inputInlineError, setInputInlineError] = useState(false);
  const [runCountdown, setRunCountdown] = useState(false);
  const [countdownEnded, setCountdownEnded] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { score } = useGameDetails(countdownEnded, name);

  useEffect(() => {
    console.log(score);
    if (runCountdown) {
      const interval = setInterval(() => {
        if (countdown <= 0) {
          setCountdownEnded(true);
          return clearInterval(interval);
        }

        setCountdown(countdown - 1000);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countdown, runCountdown, score]);

  const onEnter = (inputName) => {
    // if the user doesn't enter a name, show inline error message
    if (!inputName.length) {
      setInputInlineError(true);
      return;
    }

    setInputInlineError(false);

    // dismiss the modal and send the name to the scoreboard
    setName(inputName);
    setShowModal(false);
    setRunCountdown(true);
    setCountdown(60000);
  };

  const showRulesComponent = () => {
    setShowRules(!showRules);
    setShowModal(!showModal);
  };

  return (
    <GameContextProvider>
      <div className="App">
        {showModal && (
          <Modal
            onEnter={onEnter}
            showRulesComponent={showRulesComponent}
            inputInlineError={inputInlineError}
          />
        )}
        <Gameboard />
        <div className="game-info">
          <Scoreboard name={name} timer={countdown} />
          <div className="button-container">
            <button className="show-rules-button" onClick={showRulesComponent}>
              Show Rules
            </button>
          </div>
        </div>
      </div>
      {showRules && <Rules closeRulesModal={showRulesComponent} />}
    </GameContextProvider>
  );
}

export default App;
