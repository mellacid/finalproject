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

  // process the messages and react to commands
  if (message.startsWith("!medizin")) {
    // example command: !medizin

    sendCommandToOtherPage("medizin");

    // client.say(channel, "/me medizin"); ==> This would send a message to the chat (not needed for the bot to work)
  }
});

client.connect().catch(console.error);
// function to send commands to the other page (server.js)
function sendCommandToOtherPage(command) {
  // here you can send commands to the other page via WebSocket
  const WebSocket = require("ws");
  const ws = new WebSocket("ws://localhost:3000"); // connect to webSocket server

  ws.on("open", function open() {
    ws.send(String(command)); // convert command to string and send it (but doesn't work)
    ws.close();
  });
}
