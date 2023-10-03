import { useEffect, useState } from "react";
import { ScoreType } from "../types/ScoreType";

const useHighscores = () => {
  const [highscores, setHighscores] = useState<ScoreType[]>([]);

  const getHighscores = async () => {
    try {
      const res = await fetch("/api/highscores");
      const data = await res.json();
      setHighscores(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHighscores();
  }, []);

  return { highscores };
};

export default useHighscores;
