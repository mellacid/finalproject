import { useState, useEffect, useCallback } from "react";
import { withGrid, nextPosition, walk, loadImages } from "../utils/utils.js";
import { animations, updateAnimation } from "../utils/animations.js";
import { startBehavior, checkInteraction } from "../utils/events.js";

import truffleImg from "../../../assets/images/sprites/truffle.png";

const useGame = (initialMap, initialGameObjects, initialHero) => {
  const [map, setMap] = useState(initialMap);
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

  const addGameObject = () => {
    setGameObjects((prev) => {
      return {
        ...prev,
        truffle: {
          id: "truffle",
          imgSrc: truffleImg,
          position: { x: withGrid(9), y: withGrid(23) },
          animation: "item",
          animationFrame: 0,
          item: true,
        },
      };
    });
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
      addGameObject();
    }
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === currentDirection) {
        setCurrentDirection(null);
        setKey("");
        hero.isWalking = false;
      }
    };

    window.addEventListener("keydown", directionInput);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", directionInput);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentDirection]);

  return {
    map,
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
    addGameObject,
    showItemContainer,
    setShowItemContainer,
    itemContainer,
    setItemContainer,
  };
};

export default useGame;
