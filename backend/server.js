const http = require("http");
const path = require("path");
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:3002",
      "https://topraklostpaws.onrender.com",
      "https://topraklostpaws.onrender.com/game",
      "https://topraklostpaws-backend.onrender.com/socket.io/?EIO=4&transport=polling&t=O_JpDZv",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
require("dotenv").config();
const tmi = require("tmi.js");
const channelName = process.env.TWITCH_CHANNEL;

const options = {
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: `oauth:${process.env.TWITCH_OAUTH_TOKEN}`,
  },
  channels: [channelName],
};

const client = new tmi.Client(options);

client.connect().catch(console.error);

client.on("connected", (address, port) => {
  console.log(`Bot connected to ${address}:${port}`);
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;
  if (message.startsWith("!medizin")) {
    console.log("Medizin Befehl empfangen!");
    const imagePath = "medizinImage";
    console.log("Sending image path:", imagePath);
    io.emit("showImage", imagePath);
  } else if (message.startsWith("!image2")) {
    console.log("Image2 Befehl empfangen!");
    const imagePath = "image2";
    console.log("Sending image path:", imagePath);
    io.emit("showImage", imagePath);
  } else {
    console.log(`[${channel}] ${tags["display-name"]}: ${message}`);
    io.emit("chatMessage", `[${channel}] ${tags["display-name"]}: ${message}`);
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server
  .listen(3002, () => {
    console.log("Server running on port 3002");
  })
  .on("error", (error) => {
    console.error("Server Error:", error);
  });
