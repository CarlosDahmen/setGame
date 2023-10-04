import React from "react";
import { useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = React.useState(60000);

  const secondsLeft = Math.floor((timer / 1000) % 60);

  useEffect(() => {
    setInterval(() => {
      setTimer(timer - 1000);
    });
  }, [timer]);

  return <div>{secondsLeft}</div>;
};

export default Timer;
