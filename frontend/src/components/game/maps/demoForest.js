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
};

export default demoForest;
