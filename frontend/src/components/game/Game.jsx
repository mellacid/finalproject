import "../../styles/game.css";

import React, { useState, useRef, useEffect } from "react";

import { withGrid } from "./utils/utils.js";
import { animations, updateAnimation } from "./utils/animations.js";

import demoForest from "./maps/demoForest.js";

const Game = () => {
  const canvasRef = useRef(null);
  const [key, setKey] = useState("");

  const [map, setMap] = useState(demoForest.map);
  const [hero, setHero] = useState(demoForest.hero);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const cameraPerson = hero.position;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw map
    drawMap(ctx, cameraPerson);

    // draw hero
    drawHero(ctx, cameraPerson);
  }, [key]);

  function drawMap(ctx, cameraPerson) {
    const mapDraw = new Image();
    mapDraw.src = map.imgSrc;
    mapDraw.onload = () => {
      ctx.drawImage(
        mapDraw,
        withGrid(9) - cameraPerson.x,
        withGrid(4.5) - cameraPerson.y
      );
    };
  }

  function drawHero(ctx, cameraPerson) {
    if (!hero) return;

    console.log("hero.position:", hero.position);

    updateAnimation(hero);
    walk();

    const frameX = animations[hero.animation][hero.animationFrame][0];
    const frameY = animations[hero.animation][hero.animationFrame][1];

    const x = hero.position.x + withGrid(9) - cameraPerson.x;
    const y = hero.position.y + withGrid(4.5) - cameraPerson.y;

    const heroDraw = new Image();
    heroDraw.src = hero.imgSrc;
    heroDraw.onload = () => {
      ctx.drawImage(heroDraw, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);
    };
  }

  function walk() {
    if (key === "up") {
      hero.animation = "walk-up";
      hero.position.y -= 16;
    } else if (key === "down") {
      hero.animation = "walk-down";
      hero.position.y += 16;
    } else if (key === "left") {
      hero.animation = "walk-left";
      hero.position.x -= 16;
    } else if (key === "right") {
      hero.animation = "walk-right";
      hero.position.x += 16;
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
