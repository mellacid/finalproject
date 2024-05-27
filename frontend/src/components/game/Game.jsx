import "../../styles/game.css";

import React, { useState, useRef, useEffect, useCallback } from "react";

import { withGrid, asGridCoord, nextPosition, walk } from "./utils/utils.js";
import { animations, updateAnimation } from "./utils/animations.js";
import { startBehavior, checkInteraction } from "./utils/events.js";

import truffleImg from "../../assets/images/sprites/dog.jpg";

import demoForest from "./maps/demoForest.js";

const Game = () => {
  const canvasRef = useRef(null);
  const [key, setKey] = useState("");
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const [map, setMap] = useState(demoForest.map);
  const [gameObjects, setGameObjects] = useState(demoForest.gameObjects);
  const [hero, setHero] = useState(demoForest.hero);
  const [showTextMessage, setShowTextMessage] = useState(false);
  const [currentTextMessage, setCurrentTextMessage] = useState("Test Message");
  const [staticWalls, setStaticWalls] = useState(demoForest.walls);
  let walls = [...staticWalls];
  function isWall(coord) {
    return walls.some((wall) => wall.x === coord.x && wall.y === coord.y);
  }

  const [truffle, setTruffle] = useState(true);

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

    console.log("hero: ", hero);

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

        if (hero.isWalking && hero.isPlayerControlled) {
          walk(hero, key, isWall);
        } else {
          hero.animation = `idle-${hero.direction}`;
        }

        if (isEnterPressed) {
          const interactionCheck = nextPosition(
            Math.round(hero.position.x / 24) * 24,
            Math.round(hero.position.y / 24) * 24,
            hero.direction
          );
          checkInteraction(
            interactionCheck,
            gameObjects,
            hero.direction,
            showTextMessage,
            setShowTextMessage,
            setCurrentTextMessage,
            truffle,
            setTruffle
          );
          setIsEnterPressed(false);
        }

        animationFrameId = requestAnimationFrame(draw);
      };
      draw();
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    key,
    isEnterPressed,
    drawMap,
    drawGameObjects,
    drawHero,
    hero,
    map.imgSrc,
    gameObjects,
    showTextMessage,
  ]);

  const addGameObject = () => {
    setGameObjects((prev) => {
      return {
        ...prev,
        truffle: {
          id: "truffle",
          imgSrc: truffleImg,
          position: { x: withGrid(9), y: withGrid(23) },
          animation: "idle-down",
          animationFrame: 0,
        },
      };
    });
  };

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
      setIsEnterPressed(true);
    } else if (e.key === "p") {
      console.log("p pressed");
      addGameObject();
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
