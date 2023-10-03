import { useEffect, useState } from "react";
import { ScoreType } from "../types/ScoreType";

const useHighscores = () => {
  const [highscores, setHighscores] = useState<ScoreType[]>([]);

  const isHighscore = (newScore: ScoreType) => {
    const worseScore = highscores.pop() ?? { score: 0 };
    if (newScore.score > worseScore.score) setHighscore(newScore);
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

      console.log("NEW HIGHSCORES", highscores);

      //todo: send post request with updated highscores
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

  return { highscores, isHighscore };
};

export default useHighscores;
