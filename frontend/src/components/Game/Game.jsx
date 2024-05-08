import React, { useRef } from "react";
import GameCanvas from "./GameCanvas.jsx";

const Game = () => {
  const gameRef = useRef(null);

  return (
    <div ref={gameRef} className="game-container">
      <GameCanvas />
    </div>
  );
};

export default Game;
