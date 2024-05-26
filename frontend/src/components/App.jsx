import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3002");

function App() {
  const [imagePath, setImagePath] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("showImage", (path) => {
      console.log("showImage event received with path:", path);
      setImagePath(path);
    });

    socket.on("chatMessage", (message) => {
      console.log("Received chat message:", message);
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("error", (error) => {
      console.error("Socket.IO Error:", error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  console.log("Rendering with imagePath:", imagePath);
  return (
    <div>
      {imagePath && <img src={imagePath} alt="Medizin" />}
      <div>
        <h2>Chat Messages</h2>
        <ul>
          {chatMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
