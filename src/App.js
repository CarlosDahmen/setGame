import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard.tsx";
import { Modal } from "./components/Modal";
import Scoreboard from "./components/Scoreboard";
import { GameContextProvider } from "./context/GameLogic";

function App() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(true);

  const onEnter = (inputName) => {
    // dismiss the modal and send the name to the scoreboard
    setName(inputName);
    setShowModal(false);
  };

  return (
    <GameContextProvider>
      <div className="App">
        {showModal && <Modal onEnter={onEnter} />}
        <Gameboard />
        <div className="game-info">
          <Scoreboard name={name} />
          <button className="set-button">SET</button>
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
