import React, { useRef, useEffect } from "react";

import { CELL_SIZE } from "../helpers/consts.js";

const Sprite = ({ frameCoord, image, size = 32 }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvasEl = canvasRef.current;

    const ctx = canvasEl.getContext("2d");

    // clear
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // draw from frameCoord
    const tileSheetX = frameCoord.split("x")[0];
    const tileSheetY = frameCoord.split("x")[1];

    ctx.drawImage(
      image,
      tileSheetX * CELL_SIZE, // x
      tileSheetY * CELL_SIZE, // y
      size, // how much to crop from sprite sheet x
      size, // how much to crop from sprite sheet y
      0, // x where to start drawing on canvas
      0, // y where to start drawing on canvas
      size, // how much to draw on canvas x
      size // how much to draw on canvas y
    );
  }, [frameCoord, size, image]);

  return (
    <div>
      <canvas ref={canvasRef} width={size} height={size} />
    </div>
  );
};

const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;
