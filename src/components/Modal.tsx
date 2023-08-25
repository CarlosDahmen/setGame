import { createPortal } from "react-dom";
import "./Modal.css";
import Landing from "./Landing";

interface IProps {
  onEnter: (inputName: string) => void;
  showRules: boolean;
  showRulesComponent: () => void;
}

export const Modal = ({ onEnter, showRulesComponent }: IProps) => {
  return createPortal(
    <div className="modal">
      <Landing onEnter={onEnter} showRulesComponent={showRulesComponent} />
    </div>,
    document.body
  );
};
