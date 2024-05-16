import { withGrid } from "../utils/utils.js";

import forestMapImage from "../../../assets/images/maps/map.png";
import gimpMap from "../../../assets/images/maps/worldmap-gimp.png";

import heroImage from "../../../assets/images/sprites/dog.jpg";
import boarImg from "../../../assets/images/sprites/wildboar.png";
import dogBandanaImg from "../../../assets/images/sprites/dogs_bandana.png";

const demoForest = {
  map: {
    imgSrc: gimpMap,
  },

  hero: {
    imgSrc: dogBandanaImg,
    animation: "idle-down",
    animationFrame: 0,
    isWalking: false,
    position: { x: withGrid(9), y: withGrid(10) },
  },
  gameObjects: {
    npc1: {
      imgSrc: boarImg,
      animation: "idle-down",
      animationFrame: 0,
      isWalking: false,
      position: { x: withGrid(9), y: withGrid(1) },
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
