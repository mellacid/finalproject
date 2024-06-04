//App.jsx


/*import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/index.css";
import "../styles/App.css";
import Intro from "../components/intro.jsx";
import Story from "../components/Story.jsx";
import Options from "../components/options.jsx";

import medizinImage from "../assets/img/medizin.png";
import io from "socket.io-client";

import GameSlide from "../components/gameSlide.jsx";

import AudioPlayer from "./AudioPlayer.jsx";

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
    const socket = io("http://localhost:3002", {
      withCredentials: true,
      transports: ["websocket", "polling", "flashsocket"],
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });
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
       <AudioPlayer src="https://suno.com/playlist/a07445bb-c7de-40ad-a227-81d518f3359b" volume={0.3} loop={true} />
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

export default App;*/


import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/index.css";
import "../styles/App.css";
import Intro from "../components/intro.jsx";
import Story from "../components/Story.jsx";
import Options from "../components/options.jsx";
import GameSlide from "../components/gameSlide.jsx";
import medizinImage from "../assets/img/medizin.png";
import io from "socket.io-client";
import AudioPlayer from "../components/AudioPlayer.jsx";
import enchantedShadows from '../assets/audio/EnchantedShadows.mp3';


const App = () => {
  const [imagePath, setImagePath] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:3002", {
      withCredentials: true,
      transports: ["websocket", "polling", "flashsocket"],
    });

    socket.on("showImage", (newPath) => {
      setImagePath(newPath);
    });

    socket.on("chatMessage", (message) => {
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("showImage");
      socket.off("chatMessage");
    };
  }, []);

  return (
    <div className="app-container">
      <AudioPlayer  />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/story" element={<Story />} />
        <Route path="/game" element={<GameSlide />} />
        <Route path="/options" element={<Options />} />
        <Route path="/connect" element={<div>Connect</div>} />
      </Routes>
    </div>
  );
};

export default App;