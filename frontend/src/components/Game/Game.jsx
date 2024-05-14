import "../../styles/game.css";

import React, { useState, useRef, useEffect } from "react";

import forestMapImage from "../../assets/images/maps/map.png";
import heroImage from "../../assets/images/sprites/dog.jpg";

const Game = () => {
  const canvasRef = useRef(null);
  const [map, setMap] = useState({
    imgSrc: forestMapImage,
  });
  const [hero, setHero] = useState({
    imgSrc: heroImage,
    position: { x: 10.5, y: 6 },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // draw map
    const mapDraw = new Image();
    mapDraw.src = map.imgSrc;
    mapDraw.onload = () => {
      ctx.drawImage(mapDraw, 0, 0);
      drawHero(ctx);
    };

    // draw hero
  }, []);

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
        hero.position.x * 16,
        hero.position.y * 16,
        32,
        32
      );
    };
  }

  return (
    <div className="game-container">
      <canvas ref={canvasRef}></canvas>;
    </div>
  );
};

export default Game;
