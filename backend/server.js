const http = require("http");
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

require("dotenv").config();
const tmi = require("tmi.js");
const channelName = process.env.TWITCH_CHANNEL;

const client = new tmi.Client({
    options: { debug: true },
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: `oauth:${process.env.TWITCH_OAUTH_TOKEN}`,
  },
  channels: [channelName],
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  if (self) return; // Ignore messages from the bot
  io.emit("chat message", tags.username, message);

  if (message.startsWith("!medizin")) {
    io.emit("showImage", "../img/medizin.png");
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    io.emit("message", message); // Send message to all clients
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
