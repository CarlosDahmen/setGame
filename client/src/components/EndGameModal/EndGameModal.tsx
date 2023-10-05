// import Landing from "../Landing/Landing";
import { Modal } from "../Modal/Modal";
import { useGameDetails } from "../../context/GameLogic";

interface IProps {
  onEnter: (inputName: string) => void;
  showRulesComponent: () => void;
  inputName: string;
}

export const EndGameModal = ({
  onEnter,
  showRulesComponent,
  inputName,
}: IProps) => {
  const { score } = useGameDetails();

  return (
    <Modal>
      <div className="landing">
        <h1 id={"title"}>Time's up! You found {score} Sets!</h1>
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
