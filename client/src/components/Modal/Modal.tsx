import { createPortal } from "react-dom";
import "./Modal.css";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Modal = ({ children }: IProps) => {
  return createPortal(<div className="modal">{children}</div>, document.body);
};
