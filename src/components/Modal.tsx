import { createPortal } from "react-dom";
import Landing from "./Landing";
import "./Modal.css";

interface IProps {
  name: string;
  onEnter: (name: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Modal = ({ name, onEnter, onChange }: IProps) => {
  return createPortal(
    <div className="modal">
      <Landing name={name} onEnter={onEnter} onChange={onChange} />
    </div>,
    document.body
  );
};
