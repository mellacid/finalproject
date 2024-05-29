import "../../styles/game.css";

import React, { useState, useRef, useEffect, useCallback } from "react";

import useGame from "./hooks/useGame.js";
import { withGrid, nextPosition, walk, loadImages } from "./utils/utils.js";
import { animations, updateAnimation } from "./utils/animations.js";
import { startBehavior, checkInteraction } from "./utils/events.js";

import { ItemContainer } from "./utils/ItemContainer.jsx";

import demoForest from "./maps/demoForest.js";

const Game = () => {
  const level = demoForest;

  const {
    lowerMap,
    upperMap,
    gameObjects,
    hero,
    key,
    isEnterPressed,
    setIsEnterPressed,
    showTextMessage,
    setShowTextMessage,
    currentTextMessage,
    setCurrentTextMessage,
    truffle,
    setTruffle,
    showItemContainer,
    itemContainer,
    setItemContainer,
  } = useGame(level.lowerMap, level.upperMap, level.gameObjects, level.hero);

  const canvasRef = useRef(null);

  const [staticWalls, setStaticWalls] = useState(level.walls);
  let walls = [...staticWalls];
  function isWall(coord) {
    return walls.some((wall) => wall.x === coord.x && wall.y === coord.y);
  }

  const drawLowerMap = useCallback(
    (ctx, cameraPerson, images) => {
      const x = withGrid(10) - cameraPerson.x;
      const y = withGrid(6) - cameraPerson.y;
      ctx.drawImage(images[lowerMap.imgSrc], x, y);
    },
    [lowerMap.imgSrc]
  );

  const drawUpperMap = useCallback(
    (ctx, cameraPerson, images) => {
      const x = withGrid(10) - cameraPerson.x;
      const y = withGrid(6) - cameraPerson.y;
      ctx.drawImage(images[upperMap.imgSrc], x, y);
    },
    [upperMap.imgSrc]
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

    console.log(
      "hero.position:",
      "x: ",
      hero.position.x / 24,
      "y: ",
      hero.position.y / 24
    );

    const imageSources = [
      lowerMap.imgSrc,
      upperMap.imgSrc,
      ...Object.values(gameObjects).map((obj) => obj.imgSrc),
      hero.imgSrc,
    ];

    let animationFrameId;

    const render = async () => {
      const images = await loadImages(imageSources);
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw lower map
        drawLowerMap(ctx, cameraPerson, images);

        // draw game objects
        drawGameObjects(ctx, cameraPerson, images);

        // draw hero
        drawHero(ctx, cameraPerson, images);

        // draw upper map
        drawUpperMap(ctx, cameraPerson, images);

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
            setTruffle,
            setItemContainer
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
    drawLowerMap,
    drawUpperMap,
    drawGameObjects,
    drawHero,
    hero,
    lowerMap.imgSrc,
    upperMap.imgSrc,
    gameObjects,
    showTextMessage,
  ]);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} width="528" height="297"></canvas>
      {showItemContainer && (
        <ItemContainer
          itemContainer={itemContainer}
          gameObjects={gameObjects}
        />
      )}
      {showTextMessage && (
        <div className="TextMessage">{currentTextMessage}</div>
      )}
    </div>
  );
};

export default Game;
