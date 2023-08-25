import "./Landing.css";
import { useState, useEffect } from "react";

const Landing = ({ onEnter, showRulesComponent }: any) => {
  const [inputName, setInputName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    const enterButton = document.getElementById("enter");
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
    <div className="landing">
      <h1 id={"title"}>Welcome to the game of Set!</h1>
      <h2 id={"title"}>Enter your name to start</h2>
      <input
        type="text"
        value={inputName}
        id="name-input"
        onChange={(e) => setInputName(e.target.value)}
      />
      <button
        disabled={inputName === ""}
        id="enter-button"
        onClick={() => onEnter(inputName)}
      >
        ENTER
      </button>
      <button id="rules-button" onClick={() => showRulesComponent()}>
        First time playing? Check out the rules HERE
      </button>
    </div>
  );
};

export default Landing;
