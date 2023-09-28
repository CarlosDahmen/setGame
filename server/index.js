const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const port = 8080;
const io = new Server(server);

// console.log(path.join(__dirname, "..", "build"));

app.use(express.static(path.join(__dirname, "..", "client/build")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "..", "client/build/index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
