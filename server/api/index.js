import express from "express";

const apiRouter = express.Router();

// eslint-disable-next-line no-unused-vars
apiRouter.get("/highscores", (req, res, next) => {
  res.json(req.state.highscores);
});

apiRouter.post("/highscores", (req, res) => {
  const { body } = req;
  req.state.highscores = body;
  res.json(body);
});

export default apiRouter;
