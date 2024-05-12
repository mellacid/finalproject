import React, { useState, useEffect } from "react";
import Sprite from "./object-graphics/Sprite.jsx";

import { SPRITE_SHEET_SRC } from "./helpers/consts.js";

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
      <Sprite image={spriteSheetImage} frameCoord={"0x0"} />
      <Sprite image={spriteSheetImage} frameCoord={"2x0"} />
    </div>
  );
};

export default Game;
