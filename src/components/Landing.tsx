import "./Landing.css";

const Landing = ({ name, onEnter, onChange }: any) => {
  return (
    <div className="landing">
      <h2>Welcome to Set game</h2>
      <h3>Enter your name to start</h3>
      <label>Player Name</label>
      <input type="text" value={name} onChange={onChange} />
      <button onClick={onEnter}>ENTER</button>
    </div>
  );
};

export default Landing;
