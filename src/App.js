import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard.tsx";
import Scoreboard from "./components/Scoreboard";
import { GameContextProvider } from "./context/GameLogic";
import { Modal } from "./components/Modal";
import Rules from "./components/Rules";

function App() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showRules, setShowRules] = useState(false);

  const onEnter = (inputName) => {
    // dismiss the modal and send the name to the scoreboard
    setName(inputName);
    setShowModal(false);
  };

  const showRulesComponent = () => {
    setShowRules(!showRules);
    setShowModal(!showModal);
  };

  return (
    <GameContextProvider>
      <div className="App">
        {showModal && (
          <Modal onEnter={onEnter} showRulesComponent={showRulesComponent} />
        )}
        <Gameboard />
        <div className="game-info">
          <Scoreboard name={name} />
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
