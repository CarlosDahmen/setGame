import { useGameDetails } from "../../context/GameLogic";
import "./Scoreboard.css";
import { ScoreType } from "../../types/ScoreType";
interface IProps {
  name: string;
  timer: number;
  highscores: ScoreType[];
}
const Scoreboard: React.FunctionComponent<IProps> = ({
  name,
  timer,
  highscores,
}) => {
  const { score } = useGameDetails();

  return (
    <div>
      <h2>TIME LEFT: {timer}</h2>
      <h2 id="score-title">YOUR SCORE</h2>
      <section className="scoreboard">
        <span className="player">
          {name && (
            <h3>
              {name} {score}
            </h3>
          )}
        </span>
      </section>
      <h2 id="score-title">TOP TEN SCORES</h2>
      <section className="scoreboard">
        <span className="player">
          {highscores.length &&
            highscores.map((highscore, i) => {
              return (
                <div key={i}>
                  <h3>
                    {i + 1}. {highscore.name} {highscore.score}
                  </h3>
                </div>
              );
            })}
        </span>
      </section>
    </div>
  );
};

export default Scoreboard;
