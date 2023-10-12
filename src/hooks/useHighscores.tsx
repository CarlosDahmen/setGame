import { useEffect, useState } from "react";
import { ScoreType } from "../types/ScoreType";

const useHighscores = () => {
  const [highscores, setHighscores] = useState<ScoreType[]>([]);

  const isHighscore = (newScore: ScoreType) => {
    const worseScore = highscores[9] ?? { score: 0 };
    if (newScore.score > worseScore.score) {
      return true;
    } else return false;
  };

  const getHighscores = async () => {
    try {
      const res = await fetch("/api/highscores");
      const data = await res.json();
      setHighscores(data);
    } catch (err) {
      console.log(err);
    }
  };

  const setHighscore = async (newScore: ScoreType) => {
    try {
      getHighscores();
      highscores.pop();
      highscores.push(newScore);

      highscores.sort((a, b) => (a.score < b.score ? 1 : -1));

      await fetch("./api/highscores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(highscores),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHighscores();
  }, []);

  return { highscores, isHighscore, setHighscore };
};

export default useHighscores;
