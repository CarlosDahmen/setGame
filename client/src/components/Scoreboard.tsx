import { useGameDetails } from "../context/GameLogic";
import "./Scoreboard.css";
import useHighscores from "../hooks/useHighscores";
interface IProps {
  name: string;
  timer: number;
}
const Scoreboard: React.FunctionComponent<IProps> = ({ name, timer }) => {
  const { score } = useGameDetails();
  const { highscores } = useHighscores();
  // const [runCountdown, setRunCountdown] = useState(false);
  // const [countdown, setCountdown] = useState(0);
  // const { isHighscore } = useHighscores();

  // useEffect(() => {
  //   if (runCountdown) {
  //     const interval: any = setInterval(() => {
  //       if (countdown <= 0) {
  //         console.log("GAME OVER");
  //         console.log("name", name, "score", score);
  //         isHighscore({ name, score });
  //         return clearInterval(interval);
  //       }

  //       setCountdown(countdown - 1000);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [countdown, runCountdown]);

  return (
    <div>
      <h2>TIME LEFT: {Math.floor((timer / 1000) % 60)}</h2>
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
      </section>
    </div>
  );
};

export default Scoreboard;
