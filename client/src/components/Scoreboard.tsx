import { useGameDetails } from "../context/GameLogic";
import "./Scoreboard.css";

const highscores = [
  { name: "A", score: 30 },
  { name: "D", score: 50 },
  { name: "C", score: 20 },
  { name: "D", score: 10 },
  { name: "E", score: 9 },
  { name: "F", score: 8 },
  { name: "G", score: 7 },
  { name: "H", score: 6 },
  { name: "I", score: 5 },
  { name: "J", score: 4 },
];
interface IProps {
  name: string;
}
const Scoreboard: React.FunctionComponent<IProps> = ({ name }) => {
  const { score } = useGameDetails();

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
          {highscores.map((highscore) => {
            return (
              <div>
                <h3>
                  {highscore.name} {highscore.score}
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
