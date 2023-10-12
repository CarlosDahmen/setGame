// import Landing from "../Landing/Landing";
import { Modal } from "../Modal/Modal";
import { useGameDetails } from "../../context/GameLogic";
import useHighscores from "../../hooks/useHighscores";

interface IProps {
  playing: boolean;
  onEnter: (inputName: string) => void;
  showRulesComponent: () => void;
  inputName: string;
  highscore: boolean;
}

export const EndGameModal = ({
  onEnter,
  showRulesComponent,
  inputName,
  highscore,
}: IProps) => {
  const { score } = useGameDetails();
  const { highscores } = useHighscores();

  return (
    <Modal>
      <div className="landing">
        {highscore ? (
          <>
            <h1 id={"title"}>Congratulations! Your Score made the Top 10!</h1>
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
          </>
        ) : (
          <h1 id={"title"}>Time's up! You found {score} Sets!</h1>
        )}
        <button id="enter-button" onClick={() => onEnter(inputName)}>
          Play again!
        </button>
        <button id="rules-button" onClick={() => showRulesComponent()}>
          Want to take another look at the rules? Click HERE
        </button>
      </div>
    </Modal>
  );
};
// };
