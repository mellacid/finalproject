const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("WebSocket connection established");

  ws.on("message", function incoming(message) {
    console.log("Nachricht empfangen:", message.toString());
    // here you can react to the commands from the bot (bot.js)
    if (message.toString() === "medizin") {
      console.log("Command received: Show medicine");

      const imageUrl = "./img/medizin.png";

      ws.send(imageUrl); // send the image URL to the client (but this doesn't seem to work yet)
    }
  });
});

console.log("WebSocket-Server running on Port 3000");
