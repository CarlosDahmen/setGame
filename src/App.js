import "./App.css";
import Gameboard from "./components/Gameboard.tsx";
import Scoreboard from "./components/Scoreboard";
import { GameContextProvider } from "./context/GameLogic";

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <Gameboard />
        <div className="game-info">
          <Scoreboard />
          <button className="set-button">SET</button>
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
