import { useState, useEffect } from "react";

import io from "socket.io-client";

import { withGrid } from "../utils/utils.js";

const useGame = (
  initialLowerMap,
  initialUpperMap,
  initialGameObjects,
  initialHero
) => {
  const [lowerMap, setLowerMap] = useState(initialLowerMap);
  const [upperMap, setUpperMap] = useState(initialUpperMap);
  const [gameObjects, setGameObjects] = useState(initialGameObjects);
  const [hero, setHero] = useState(initialHero);
  const [key, setKey] = useState("");
  const [currentDirection, setCurrentDirection] = useState(null);
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const [showTextMessage, setShowTextMessage] = useState(false);
  const [currentTextMessage, setCurrentTextMessage] = useState("Test Message");
  const [truffle, setTruffle] = useState(false);

  const [showItemContainer, setShowItemContainer] = useState(true);
  const [itemContainer, setItemContainer] = useState([]);

  const addTruffleObject = () => {
    setGameObjects((prev) => ({
      ...prev,
      truffle: {
        ...prev.truffle,
        position: { x: withGrid(24), y: withGrid(55) },
      },
    }));
  };

  const directionInput = (e) => {
    if (currentDirection) return;

    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      hero.isWalking = true;
      setCurrentDirection(e.key);
    } else {
      hero.isWalking = false;
    }

    if (e.key === "ArrowUp") {
      setKey("up");
    } else if (e.key === "ArrowDown") {
      setKey("down");
    } else if (e.key === "ArrowLeft") {
      setKey("left");
    } else if (e.key === "ArrowRight") {
      setKey("right");
    } else if (e.key === "Enter") {
      setIsEnterPressed(true);
    } else if (e.key === "p") {
      console.log("p pressed");
      addTruffleObject();
    }
  };

  useEffect(() => {
    const socket = io("https://topraklostpaws-backend.onrender.com", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    const handleKeyUp = (e) => {
      if (e.key === currentDirection) {
        setCurrentDirection(null);
        setKey("");
        hero.isWalking = false;
      }
    };

    const handleChatMessage = (message) => {
      const command = message.split(": ")[1];

      if (command === "truffle") {
        addTruffleObject();
      }
    };

    socket.on("connect", () => {
      console.log("Game connected to server");
    });

    socket.on("chatMessage", handleChatMessage);

    window.addEventListener("keydown", directionInput);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      socket.off("chatMessage", handleChatMessage);
      window.removeEventListener("keydown", directionInput);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentDirection]);

  return {
    lowerMap,
    upperMap,
    gameObjects,
    hero,
    key,
    currentDirection,
    isEnterPressed,
    setIsEnterPressed,
    showTextMessage,
    setShowTextMessage,
    currentTextMessage,
    setCurrentTextMessage,
    truffle,
    setTruffle,
    addTruffleObject,
    showItemContainer,
    setShowItemContainer,
    itemContainer,
    setItemContainer,
  };
};

export default useGame;
