import React, { useState, useRef, useEffect } from "react";

import forestMapImage from "../../../assets/images/maps/map.png";
import heroImage from "../../../assets/images/sprites/dog.jpg";

const Map = () => {
  const canvasRef = useRef(null);
  const [map, setMap] = useState({
    imgSrc: forestMapImage,
  });
  const [hero, setHero] = useState({
    imgSrc: heroImage,
    position: { x: 0, y: 0 },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // draw map
    const mapDraw = new Image();
    mapDraw.src = map.imgSrc;
    ctx.drawImage(mapDraw, 10, 0);

    // draw hero

    drawHero(ctx);
  }, []);

  function drawHero(ctx) {
    const heroDraw = new Image();
    heroDraw.src = hero.imgSrc;
    heroDraw.onload = () => {
      ctx.drawImage(heroDraw, 0, 0, 32, 32, 4 * 16, 1 * 16 - 16, 32, 32);
    };
  }

  return <canvas ref={canvasRef}></canvas>;
};

export default Map;
