import React, { useRef } from "react";

const GameCanvas = () => {
  const gameRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div ref={gameRef} className="game-container">
      <canvas
        ref={canvasRef}
        className="game-canvas"
        width="352"
        height="198"
      ></canvas>
    </div>
  );
};

export default GameCanvas;
