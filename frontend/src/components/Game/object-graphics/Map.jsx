import React, { useState, useRef, useEffect } from "react";

import forestMapImage from "../../../assets/images/maps/map.png";
import heroImage from "../../../assets/images/sprites/dog.jpg";

const Map = () => {
  const canvasRef = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = forestMapImage;
    image.onload = () => {
      setMap(image);
    };
    ctx.drawImage(image, 0, 0);

    const hero = new Image();
    hero.src = heroImage;
    hero.onload = () => {
      ctx.drawImage(hero, 0, 0, 32, 32, 4 * 16, 1 * 16 - 16, 32, 32);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Map;
