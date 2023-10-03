import express from "express";

const apiRouter = express.Router();

apiRouter.get("/highscores", (req, res, next) => {
  console.log(req.state);
  res.json(req.state.highscores);
});

apiRouter.post("/highscores", (req, res) => {
  const { body } = req;
  req.state.highscores = body;
  res.json(body);
});

export default apiRouter;
