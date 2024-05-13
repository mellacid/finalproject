import "../../styles/game.css";

import React, { useState, useEffect } from "react";

import { SPRITE_SHEET_SRC } from "./helpers/consts.js";
import RenderLevel from "./level-layout/RenderLevel.jsx";

const Game = () => {
  const [spriteSheetImage, setSpriteSheetImage] = useState(null);
  useEffect(() => {
    const image = new Image();

    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, []);
  if (!spriteSheetImage) {
    return null;
  }

  return (
    <div>
      <RenderLevel spriteSheetImage={spriteSheetImage} />
    </div>
  );
};

export default Game;
