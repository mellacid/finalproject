import React, { useRef, useEffect, useState } from "react";
import demoForestImage from "../../assets/images/maps/map.png";
import playerImage from "../../assets/images/sprites/dog.jpg";
import shadowImage from "../../assets/images/sprites/shadow.png";

const GameCanvas = () => {
  const canvasRef = useRef(null);
  const [map, setMap] = useState({
    image: demoForestImage,
    player: { image: playerImage, position: { x: 4, y: 5 } },
  });
  let ctx = null;

  useEffect(() => {
    init();
    createCanvasCtx();
    drawOverworld();
  }, []);

  // Overworld
  function createCanvasCtx() {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
  }

  function drawOverworld() {
    // draw map
    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
    image.src = map.image;

    // draw shadow
    const shadow = new Image();
    shadow.onload = () => {
      ctx.drawImage(
        shadow,
        0, // left cut
        0, // top cut
        32, // width cut
        32, // height cut
        map.player.position.x * 16,
        map.player.position.y * 16 - 16,
        32, // width draw
        32 // height draw
      );
    };
    shadow.src = shadowImage;

    // draw player

    const player = new Image();

    player.onload = () => {
      ctx.drawImage(
        player,
        0, // left cut
        0, // top cut
        32, // width cut
        32, // height cut
        map.player.position.x * 16,
        map.player.position.y * 16 - 16,
        32, // width draw
        32 // height draw
      );
    };
    player.src = map.player.image;
  }

  // init game
  function init() {
    console.log("It's working!");
  }

  return (
    <canvas
      ref={canvasRef}
      className="game-canvas"
      width="352"
      height="198"
    ></canvas>
  );
};

export default GameCanvas;
