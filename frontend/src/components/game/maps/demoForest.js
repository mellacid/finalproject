import { withGrid } from "../utils/utils.js";

import forestMapImage from "../../../assets/images/maps/map.png";
import heroImage from "../../../assets/images/sprites/dog.jpg";

const demoForest = {
  map: {
    imgSrc: forestMapImage,
  },

  hero: {
    imgSrc: heroImage,
    animation: "idle-down",
    animationFrame: 0,
    isWalking: false,
    position: { x: withGrid(9), y: withGrid(10) },
  },
  gameObjects: {
    npc1: {
      imgSrc: heroImage,
      animation: "idle-down",
      animationFrame: 0,
      isWalking: false,
      position: { x: withGrid(4), y: withGrid(0) },
    },
    npc2: {
      imgSrc: heroImage,
      animation: "idle-up",
      animationFrame: 0,
      isWalking: false,
      position: { x: withGrid(8), y: withGrid(17) },
    },
  },
};

export default demoForest;
