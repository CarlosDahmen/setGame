import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import "./LandingModal.css";

interface IProps {
  onEnter: (inputName: string) => void;
  showRules: boolean;
  showRulesComponent: () => void;
  inputInlineError: boolean;
}

export const LandingModal = ({
  onEnter,
  showRulesComponent,
  inputInlineError,
}: IProps) => {
  const [inputName, setInputName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    const enterButton = document.getElementById("enter-button");
    if (e.key === "Enter") {
      enterButton?.click();
    }
  };

  //if enter is pressed, click on the enter button
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  //useEffect to focus on the input field on first load
  useEffect(() => {
    const input = document.getElementById("name-input");
    input?.focus();
  }, []);

  return (
    <Modal>
      <div className="landing">
        <h1 id={"title"}>Welcome to the game of Set!</h1>
        <div className="name-input-wrapper">
          <label htmlFor="name-input">Enter your name to start</label>
          <input
            type="text"
            value={inputName}
            id="name-input"
            className={
              inputInlineError && !inputName.length ? "input-error" : ""
            }
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Your name here"
          />
          {inputInlineError && !inputName.length && (
            <span className="inline-error-message">You must enter a name</span>
          )}
        </div>
        <button id="enter-button" onClick={() => onEnter(inputName)}>
          ENTER
        </button>
        <button id="rules-button" onClick={() => showRulesComponent()}>
          First time playing? Check out the rules HERE
        </button>
      </div>
    </Modal>
  );
};
