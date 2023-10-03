// import highscores from "../highscores";

export const highscores = [
  { name: "A", score: 30 },
  { name: "D", score: 50 },
  { name: "C", score: 20 },
  { name: "D", score: 10 },
  { name: "E", score: 9 },
  { name: "F", score: 8 },
  { name: "G", score: 7 },
  { name: "H", score: 6 },
  { name: "I", score: 5 },
  { name: "J", score: 4 },
];

export const socket = (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.emit("highscores", highscores);

  socket.on("disconnect", () => {
    console.log(`user ${socket.id} disconnected`);
  });
};
