const WebSocket = require("ws");

console.log(__dirname);

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("WebSocket connection established");

  ws.on("message", function incoming(message) {
    console.log("Nachricht empfangen:", message.toString());
    // Hier kannst du die empfangenen Befehle verarbeiten und entsprechende Aktionen ausführen
    // Beispiel:
    if (message.toString() === "medizin") {
      console.log("Command received: Show medicine");

      const imageUrl = "./img/medizin.png"; // Beispiel-URL, ersetze dies mit der tatsächlichen URL deines Bildes

      // Sende die Bild-URL über die WebSocket-Verbindung an den Client
      ws.send(imageUrl);
    }
  });
});

console.log("WebSocket-Server running on Port 3000");
