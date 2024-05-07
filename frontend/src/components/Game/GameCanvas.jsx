import React, { useRef, useEffect } from "react";

const GameCanvas = () => {
  const gameRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //test
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

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
