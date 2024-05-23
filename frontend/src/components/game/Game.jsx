import "../../styles/game.css";

import React, { useState, useRef, useEffect, useCallback } from "react";

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

  const loadImages = (sources) => {
    const images = {};
    let loadedImages = 0;
    const numImages = sources.length;
    return new Promise((resolve) => {
      sources.forEach((source) => {
        images[source] = new Image();
        images[source].src = source;
        images[source].onload = () => {
          if (++loadedImages >= numImages) {
            resolve(images);
          }
        };
      });
    });
  };

  const drawMap = useCallback(
    (ctx, cameraPerson, images) => {
      const x = withGrid(10) - cameraPerson.x;
      const y = withGrid(6) - cameraPerson.y;
      ctx.drawImage(images[map.imgSrc], x, y);
    },
    [map.imgSrc]
  );

  const drawGameObjects = useCallback((ctx, cameraPerson, images) => {
    const dynamicWalls = [];

    Object.values(gameObjects).forEach(
      (object) => {
        const frameX = animations[object.animation][object.animationFrame][0];
        const frameY = animations[object.animation][object.animationFrame][1];

        const x = object.position.x + withGrid(10) - cameraPerson.x;
        const y = object.position.y + withGrid(6) - cameraPerson.y;

        if (!object.behaviorTimeout) {
          startBehavior(object);
        }

        updateAnimation(object);

        ctx.drawImage(
          images[object.imgSrc],
          frameX * 48,
          frameY * 48,
          48,
          48,
          x,
          y,
          48,
          48
        );

        dynamicWalls.push(object.position);
      },
      [gameObjects]
    );

    walls = [...staticWalls, ...dynamicWalls];
  });

  const drawHero = useCallback(
    (ctx, cameraPerson, images) => {
      if (!hero) return;

      console.log("hero.position.x:", hero.position.x);
      console.log("hero.position.y:", hero.position.y);

      const frameX = animations[hero.animation][hero.animationFrame][0];
      const frameY = animations[hero.animation][hero.animationFrame][1];

      const x = hero.position.x + withGrid(10) - cameraPerson.x;
      const y = hero.position.y + withGrid(6) - cameraPerson.y;

      ctx.drawImage(
        images[hero.imgSrc],
        frameX * 48,
        frameY * 48,
        48,
        48,
        x,
        y,
        48,
        48
      );
    },
    [hero]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const cameraPerson = hero.position;

    const imageSources = [
      map.imgSrc,
      ...Object.values(gameObjects).map((obj) => obj.imgSrc),
      hero.imgSrc,
    ];

    let animationFrameId;

    const render = async () => {
      const images = await loadImages(imageSources);
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw map
        drawMap(ctx, cameraPerson, images);

        // draw game objects
        drawGameObjects(ctx, cameraPerson, images);

        // draw hero
        drawHero(ctx, cameraPerson, images);

        updateAnimation(hero);

        if (hero.isWalking) {
          walk();
        } else {
          hero.animation = `idle-${hero.direction}`;
        }

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

        animationFrameId = requestAnimationFrame(draw);
      };
      draw();
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [key, drawMap, drawGameObjects, drawHero, hero, map.imgSrc, gameObjects]);

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

    const step = 1;
    if (key === "up") {
      hero.position.y -= step;
    } else if (key === "down") {
      hero.position.y += step;
    } else if (key === "left") {
      hero.position.x -= step;
    } else if (key === "right") {
      hero.position.x += step;
    }
  }

  const directionInput = (e) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      hero.isWalking = true;
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
      setKey("enter");
    }
  };

  useEffect(() => {
    const handleKeyUp = () => {
      setKey("");
      hero.isWalking = false;
    };

    window.addEventListener("keydown", directionInput);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", directionInput);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

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
