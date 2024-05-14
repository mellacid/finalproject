import "../../styles/game.css";

import React, { useState, useRef, useEffect } from "react";

import forestMapImage from "../../assets/images/maps/map.png";
import heroImage from "../../assets/images/sprites/dog.jpg";

const animations = {
  "idle-down": [[0, 0]],
  "idle-up": [[0, 2]],
  "idle-left": [[0, 3]],
  "idle-right": [[0, 1]],
  "walk-down": [
    [1, 0],
    [0, 0],
    [3, 0],
    [0, 0],
  ],
  "walk-up": [
    [1, 2],
    [0, 2],
    [3, 2],
    [0, 2],
  ],
  "walk-left": [
    [1, 3],
    [0, 3],
    [3, 3],
    [0, 3],
  ],
  "walk-right": [
    [1, 1],
    [0, 1],
    [3, 1],
    [0, 1],
  ],
};

const Game = () => {
  const canvasRef = useRef(null);
  const [key, setKey] = useState("");
  const [map, setMap] = useState({
    imgSrc: forestMapImage,
  });
  const [hero, setHero] = useState({
    imgSrc: heroImage,
    animation: "idle-down",
    isWalking: false,
    position: { x: 9, y: 4.5 },
  });

  const directionInput = (e) => {
    if (e.key === "ArrowUp") {
      setKey("up");
    } else if (e.key === "ArrowDown") {
      setKey("down");
    } else if (e.key === "ArrowLeft") {
      setKey("left");
    }
    if (e.key === "ArrowRight") {
      setKey("right");
    }
  };

  function walk() {
    if (key !== "") {
      setHero({ ...hero, animation: `idle-${key}` });
    }
  }

  useEffect(() => {
    walk();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // draw map
    drawMap(ctx);

    // draw hero
    drawHero(ctx);
  }, [key]);

  function drawMap(ctx) {
    const mapDraw = new Image();
    mapDraw.src = map.imgSrc;
    mapDraw.onload = () => {
      ctx.drawImage(mapDraw, 0, 0);
    };
  }

  function drawHero(ctx) {
    const heroDraw = new Image();
    heroDraw.src = hero.imgSrc;
    heroDraw.onload = () => {
      ctx.drawImage(
        heroDraw,
        animations[hero.animation][0][0] * 32,
        animations[hero.animation][0][1] * 32,
        32,
        32,
        hero.position.x * 16 - 8,
        hero.position.y * 16 - 16,
        32,
        32
      );
    };
  }

  window.addEventListener("keydown", directionInput);
  window.addEventListener("keyup", () => {
    setKey("");
  });

  return (
    <div className="game-container">
      <canvas ref={canvasRef}></canvas>;
    </div>
  );
};

export default Game;
