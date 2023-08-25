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
          <h3>{name}</h3>
          {name && <h3>{score}</h3>}
        </span>
      </section>
    </div>
  );
};

export default Scoreboard;
