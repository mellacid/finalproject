require("dotenv").config();

const oAuth = process.env.TWITCH_OAUTH_TOKEN;
const nick = process.env.TWITCH_USERNAME;
const channel = process.env.TWITCH_CHANNEL;

const Websocket = require("ws");

const socket = new Websocket("wss://irc-ws.chat.twitch.tv:443");

socket.addEventListener("open", () => {
  socket.send(`PASS oauth:${oAuth}`);
  socket.send(`NICK ${nick}`);
  socket.send(`JOIN #${channel}`);
});

socket.addEventListener("message", (event) => {
  console.log(event.data);
  if (event.data.includes("Test")) socket.send(`PRIVMSG #${channel} :Success!`);
  if (event.data.includes("PING")) socket.send("PONG");
});

//This code is a simple implementation of a Twitch chat bot. It connects to the Twitch chat server and listens for messages. 
//If the message contains the word “Test”, the bot will respond with “Success!”. 
//If the message contains “PING”, USER (YOU) have to respond with “PONG”. This is to ensure the connection is kept alive.
//To run this code, you will need to create a  .env  file in the same directory as the  index.js  file. The  .env  file should contain the following:
//TWITCH_OAUTH_TOKEN=your_oauth_token

//To run chatbot you can use node index.js in terminal.
