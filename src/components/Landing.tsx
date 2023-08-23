import "./Landing.css";
import { useState } from "react";

const Landing = ({ onEnter }: any) => {
  const [inputName, setInputName] = useState("");

  return (
    <div className="landing">
      <h2>Welcome to the game of Set!</h2>
      <h3>Enter your name to start</h3>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={() => onEnter(inputName)}>ENTER</button>
      <h3>First time playing? Check out the rules HERE</h3>
    </div>
  );
};

export default Landing;
