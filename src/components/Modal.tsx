import { createPortal } from "react-dom";
import "./Modal.css";
import Landing from "./Landing";

interface IProps {
  onEnter: (inputName: string) => void;
  showRules: boolean;
  showRulesComponent: () => void;
  inputInlineError: boolean;
}

export const Modal = ({
  onEnter,
  showRulesComponent,
  inputInlineError,
}: IProps) => {
  return createPortal(
    <div className="modal">
      <Landing
        onEnter={onEnter}
        showRulesComponent={showRulesComponent}
        inputInlineError={inputInlineError}
      />
    </div>,
    document.body
  );
};
