import { useGameDetails } from "../context/GameLogic";

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
          {name}
          {score}
        </span>
        <span className="player">Player 2</span>
      </section>
    </div>
  );
};

export default Scoreboard;
