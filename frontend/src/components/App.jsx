import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/index.css";
import "../styles/App.css";
import Intro from "../components/intro.jsx";
import Story from "../components/Story.jsx";
import Options from "../components/options.jsx";

import medizinImage from "../assets/img/medizin.png";
import io from "socket.io-client";

import GameSlide from "../components/gameSlide.jsx";

function App() {
  const [imagePath, setImagePath] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const images = {
    medizinImage: medizinImage,
  };

  const handleImageChange = (newPath) => {
    setImagePath(newPath);
  };

  useEffect(() => {
    const socket = io("http://localhost:3002");
    socket.on("showImage", handleImageChange);

    socket.on("chatMessage", (message) => {
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("showImage", handleImageChange);
      socket.off("chatMessage");
    };
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/story" element={<Story />} />
        <Route path="/game" element={<GameSlide />} />
        <Route path="/options" element={<Options />} />
        <Route path="/connect" element={<div>Connect</div>} />
      </Routes>
    </div>
  );
}

export default App;
