import "../../styles/game.css";

import React, { useState, useRef, useEffect } from "react";

import { withGrid, asGridCoord, nextPosition } from "./utils/utils.js";
import { animations, updateAnimation } from "./utils/animations.js";
import { startBehavior, checkInteraction } from "./utils/events.js";

import demoForest from "./maps/demoForest.js";

const Game = () => {
  const canvasRef = useRef(null);
  const [key, setKey] = useState("");

  const [map, setMap] = useState(demoForest.map);
  const [gameObjects, setGameObjects] = useState(demoForest.gameObjects);
  const [hero, setHero] = useState(demoForest.hero);
  const [showTextMessage, setShowTextMessage] = useState(false);
  const [currentTextMessage, setCurrentTextMessage] = useState("Test Message");
  const [staticWalls, setStaticWalls] = useState(demoForest.walls);
  let walls = [...staticWalls];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const cameraPerson = hero.position;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw map
    drawMap(ctx, cameraPerson);

    // draw game objects
    drawGameObjects(ctx, cameraPerson);

    // draw hero
    drawHero(ctx, cameraPerson);

    if (key === "enter") {
      const interactionCheck = nextPosition(
        hero.position.x,
        hero.position.y,
        hero.direction
      );
      checkInteraction(
        interactionCheck,
        gameObjects,
        hero.direction,
        setShowTextMessage,
        setCurrentTextMessage
      );
    }
  }, [key]);

  function drawMap(ctx, cameraPerson) {
    const mapDraw = new Image();
    mapDraw.src = map.imgSrc;
    mapDraw.onload = () => {
      ctx.drawImage(
        mapDraw,
        withGrid(10) - cameraPerson.x,
        withGrid(6) - cameraPerson.y
      );
    };
  }

  function drawGameObjects(ctx, cameraPerson) {
    const dynamicWalls = [];

    Object.values(gameObjects).forEach((object) => {
      const frameX = animations[object.animation][object.animationFrame][0];
      const frameY = animations[object.animation][object.animationFrame][1];

      const x = object.position.x + withGrid(10) - cameraPerson.x;
      const y = object.position.y + withGrid(6) - cameraPerson.y;

      if (!object.behaviorTimeout) {
        startBehavior(object);
      }

      updateAnimation(object);

      const objectDraw = new Image();
      objectDraw.src = object.imgSrc;
      objectDraw.onload = () => {
        ctx.drawImage(
          objectDraw,
          frameX * 48,
          frameY * 48,
          48,
          48,
          x,
          y,
          48,
          48
        );
      };

      dynamicWalls.push(object.position);
    });

    walls = [...staticWalls, ...dynamicWalls];
  }

  function drawHero(ctx, cameraPerson) {
    if (!hero) return;

    console.log("hero.position.x:", hero.position.x);
    console.log("hero.position.y:", hero.position.y);
    console.log("hero.direction:", hero.direction);

    updateAnimation(hero);
    walk();

    const frameX = animations[hero.animation][hero.animationFrame][0];
    const frameY = animations[hero.animation][hero.animationFrame][1];

    const x = hero.position.x + withGrid(10) - cameraPerson.x;
    const y = hero.position.y + withGrid(6) - cameraPerson.y;

    const heroDraw = new Image();
    heroDraw.src = hero.imgSrc;
    heroDraw.onload = () => {
      ctx.drawImage(heroDraw, frameX * 48, frameY * 48, 48, 48, x, y, 48, 48);
    };
  }

  function isWall(coord) {
    return walls.some((wall) => wall.x === coord.x && wall.y === coord.y);
  }

  function walk() {
    if (!hero.isPlayerControlled) return;

    if (key === "up") {
      hero.animation = "walk-up";
      hero.direction = "up";
    } else if (key === "down") {
      hero.animation = "walk-down";
      hero.direction = "down";
    } else if (key === "left") {
      hero.animation = "walk-left";
      hero.direction = "left";
    } else if (key === "right") {
      hero.animation = "walk-right";
      hero.direction = "right";
    }

    const nextCoord = nextPosition(
      hero.position.x,
      hero.position.y,
      hero.direction
    );

    if (isWall(nextCoord)) {
      console.log("hier is ne Wall!!!");
      return;
    }

    if (key === "up") {
      hero.position.y -= 24;
    } else if (key === "down") {
      hero.position.y += 24;
    } else if (key === "left") {
      hero.position.x -= 24;
    } else if (key === "right") {
      hero.position.x += 24;
    }
  }

  const directionInput = (e) => {
    if (e.key === "ArrowUp") {
      setKey("up");
    } else if (e.key === "ArrowDown") {
      setKey("down");
    } else if (e.key === "ArrowLeft") {
      setKey("left");
    } else if (e.key === "ArrowRight") {
      setKey("right");
    } else if (e.key === "Enter") {
      setKey("enter");
    }
  };

  window.addEventListener("keydown", directionInput);
  window.addEventListener("keyup", () => {
    setKey("");
  });

  return (
    <div className="game-container">
      <canvas ref={canvasRef} width="528" height="297"></canvas>
      {showTextMessage && (
        <div className="TextMessage">{currentTextMessage}</div>
      )}
    </div>
  );
};

export default Game;
