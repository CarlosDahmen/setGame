import { createPortal } from "react-dom";
import Landing from "./Landing";
import "./Modal.css";

interface IProps {
  onEnter: (inputName: string) => void;
}

export const Modal = ({ onEnter }: IProps) => {
  return createPortal(
    <div className="modal">
      <Landing onEnter={onEnter} />
    </div>,
    document.body
  );
};
