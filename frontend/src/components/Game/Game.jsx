import "../../styles/game.css";

import React, { useState, useRef, useEffect } from "react";

import forestMapImage from "../../assets/images/maps/map.png";
import heroImage from "../../assets/images/sprites/dog.jpg";

const Game = () => {
  const canvasRef = useRef(null);
  const [key, setKey] = useState();
  const [map, setMap] = useState({
    imgSrc: forestMapImage,
  });
  const [hero, setHero] = useState({
    imgSrc: heroImage,
    direction: "down",
    isWalking: false,
    position: { x: 9, y: 4.5 },
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setKey("up");
    } else if (e.key === "ArrowDown") {
      setKey("down");
    } else if (e.key === "ArrowLeft") {
      setKey("left");
    } else if (e.key === "ArrowRight") {
      setKey("right");
    }
  };

  useEffect(() => {
    console.log("key: ", key);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // draw map
    drawMap(ctx);

    // draw hero
    drawHero(ctx);
  }, [hero, key]);

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
        0,
        0,
        32,
        32,
        hero.position.x * 16 - 8,
        hero.position.y * 16 - 16,
        32,
        32
      );
    };
  }

  window.addEventListener("keydown", handleKeyDown);

  return (
    <div className="game-container">
      <canvas ref={canvasRef}></canvas>;
    </div>
  );
};

export default Game;
