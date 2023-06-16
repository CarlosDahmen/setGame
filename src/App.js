import "./App.css";
import Gameboard from "./components/Gameboard.tsx";
import { GameContextProvider } from "./context/GameLogic";

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <Gameboard />
        <div className="game-info">
          <div className="scoreboard-container">
            <h2>LEADERBOARD</h2>
            <section className="scoreboard"></section>
          </div>
          <button className="set-btn">SET</button>
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
