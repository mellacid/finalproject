import Sprite from "../object-graphics/Sprite.jsx";

import React from "react";

const RenderLevel = ({ spriteSheetImage }) => {
  return (
    <div className="fullScreenContainer">
      <div className="gameScreen">
        <Sprite image={spriteSheetImage} frameCoord={"0x0"} />
        <Sprite image={spriteSheetImage} frameCoord={"2x0"} />
        <Sprite image={spriteSheetImage} frameCoord={"0x2"} />
      </div>
    </div>
  );
};

export default RenderLevel;
