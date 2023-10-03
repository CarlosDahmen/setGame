import express from "express";
import { createServer } from "node:http";
import { join } from "node:path";
import path from "path";
import { Server } from "socket.io";
import { socket } from "./socket/index.js";
import apiRouter from "./api/index.js";
import bodyParser from "body-parser";
import highscores from "./data/highscores.json" assert { type: "json" };

const __dirname = path.resolve();

const app = express();
const server = createServer(app);
const port = 8080;
const io = new Server(server);

const state = {};

const initData = () => {
  state.highscores = highscores;
};

const useState = (req, res, next) => {
  req.state = state;
  next();
};

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "client/build")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "..", "client/build/index.html"));
});

app.use("/api", [useState, apiRouter]);

// eslint-disable-next-line no-unused-vars
io.on("connection", socket);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
  initData();
});
