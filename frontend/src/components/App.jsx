import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    socket.on("chatMessage", (message) => {
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("showImage", (url) => {
      setImageUrl(url);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    const message = prompt("Enter your message");
    socket.emit("message", message);
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <ul>
        {chatMessages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
        <ul>{imageUrl && <img src={imageUrl} alt="Game" />}</ul>
      </ul>
    </div>
  );
}

export default App;
