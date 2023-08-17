import { useGameDetails } from "../context/GameLogic";
import "./Scoreboard.css";

interface IProps {
  name: string;
}
const Scoreboard: React.FunctionComponent<IProps> = ({ name }) => {
  const { score } = useGameDetails();

  return (
    <div>
      <h2>LEADERBOARD</h2>
      <section className="scoreboard">
        <span className="player">
          <div>{name}</div>
          <div>{score}</div>
        </span>
        {/* <span className="player">Player 2</span> */}
      </section>
    </div>
  );
};

export default Scoreboard;
