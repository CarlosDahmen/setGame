import { useGameDetails } from "../context/GameLogic";
import "./Scoreboard.css";
import useHighscores from "../hooks/useHighscores";
interface IProps {
  name: string;
}
const Scoreboard: React.FunctionComponent<IProps> = ({ name }) => {
  const { score } = useGameDetails();
  const { highscores, isHighscore } = useHighscores();

  return (
    <div>
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
                    {highscore.name} {highscore.score}
                  </h3>
                </div>
              );
            })}
        </span>
        <button onClick={() => isHighscore({ name, score })}>Send Score</button>
      </section>
    </div>
  );
};

export default Scoreboard;
