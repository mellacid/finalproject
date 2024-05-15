import "../../styles/game.css";

import React, { useState, useRef, useEffect } from "react";

import { withGrid } from "./utils/utils.js";
import { animations, updateAnimation } from "./utils/animations.js";

import demoForest from "./maps/demoForest.js";

const Game = () => {
  const canvasRef = useRef(null);
  const [key, setKey] = useState("");
  const animationRef = useRef(null);

  const [map, setMap] = useState(demoForest.map);
  const [hero, setHero] = useState(demoForest.hero);

  useEffect(() => {
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
    if (!hero) return;

    updateAnimation(hero);
    walk();

    const frameX = animations[hero.animation][hero.animationFrame][0];
    const frameY = animations[hero.animation][hero.animationFrame][1];

    const heroDraw = new Image();
    heroDraw.src = hero.imgSrc;
    heroDraw.onload = () => {
      ctx.drawImage(
        heroDraw,
        frameX * 32,
        frameY * 32,
        32,
        32,
        withGrid(hero.position.x) - 8,
        withGrid(hero.position.y) - 16,
        32,
        32
      );
    };
  }

  function walk() {
    if (key === "up") {
      hero.animation = "walk-up";
      hero.position.y -= 0.1;
    } else if (key === "down") {
      hero.animation = "walk-down";
      hero.position.y += 0.1;
    } else if (key === "left") {
      hero.animation = "walk-left";
      hero.position.x -= 0.1;
    } else if (key === "right") {
      hero.animation = "walk-right";
      hero.position.x += 0.1;
    }
  }

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
