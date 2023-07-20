import { useGameDetails } from "../context/GameLogic";

export default function Scoreboard() {
  const { score, setScore } = useGameDetails();

  return (
    <div>
      <h2>LEADERBOARD</h2>
      <section className="scoreboard">
        <span className="player">{score}</span>
        <span className="player">Player 2</span>
      </section>
    </div>
  );
}
