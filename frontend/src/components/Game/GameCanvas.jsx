import React, { useRef } from "react";

const GameCanvas = () => {
  const canvasRef = useRef(null);

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
