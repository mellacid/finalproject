require("dotenv").config();

const oAuth = process.env.TWITCH_OAUTH_TOKEN;
const nick = process.env.TWITCH_USERNAME;
const channel = process.env.TWITCH_CHANNEL;

const tmi = require("tmi.js");

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: nick,
    password: `oauth:${oAuth}`,
  },
  channels: [channel],
});

client.on("message", (channel, tags, message, self) => {
  if (self) return; // Ignore own messages

  console.log(`[${channel}] ${tags["username"]}: ${message}`);
  // Hier kannst du die Nachrichten verarbeiten und auf Befehle reagieren
  // Überprüfe, ob die Nachricht einen Befehl enthält und sende ihn über die WebSocket-Verbindung
  if (message.startsWith("!medizin")) {
    sendCommandToOtherPage("medizin"); // Beispielbefehl, den du an die andere Seite senden möchtest
  }
});

client.connect().catch(console.error);

// Funktion zum Senden des Befehls über die WebSocket-Verbindung
function sendCommandToOtherPage(command) {
  // Hier kannst du die Logik zum Senden des Befehls implementieren
  // Beispiel:
  const WebSocket = require("ws");
  const ws = new WebSocket("ws://localhost:3000"); // Adresse der anderen Seite

  ws.on("open", function open() {
    ws.send(String(command)); // Konvertiere die Nachricht in eine Zeichenkette, bevor sie gesendet wird
    ws.close();
  });
}


