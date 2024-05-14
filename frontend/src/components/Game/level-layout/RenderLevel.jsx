import Sprite from "../object-graphics/Sprite.jsx";
import Map from "../object-graphics/Map.jsx";
import Hero from "../object-graphics/Hero.jsx";

import React from "react";

const RenderLevel = ({ spriteSheetImage }) => {
  return (
    <div className="fullScreenContainer">
      <div className="gameScreen">
        <Map />
        <Hero />
      </div>
    </div>
  );
};

export default RenderLevel;
