import { withGrid, asGridCoord } from "../utils/utils.js";

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
    isPlayerControlled: true,
    animation: "idle-down",
    direction: "down",
    animationFrame: 0,
    animationFrameLimit: 24,
    animationFrameProgress: 24,
    isWalking: false,
    position: { x: withGrid(9), y: withGrid(10) },
  },
  gameObjects: {
    npc1: {
      imgSrc: boarImg,
      animation: "idle-down",
      animationFrame: 0,
      animationFrameLimit: 24,
      animationFrameProgress: 24,
      isWalking: false,
      position: { x: withGrid(9), y: withGrid(4) },
      behaviorLoop: [
        { type: "stand", direction: "left", time: 2000 },
        { type: "stand", direction: "down", time: 2000 },
        { type: "stand", direction: "right", time: 2000 },
        { type: "stand", direction: "down", time: 2000 },
      ],
      talking: [
        {
          type: "textMessage",
          text: "Hallo, ich bin Giaco das Wildschwein!",
          faceHero: "npc1",
        },
        {
          type: "textMessage",
          text: "Ich will Trüffel! *Grunz*",
        },
      ],
      currentTalkingIndex: 0,
      currentBehaviorIndex: 0,
      behaviorTimeout: null,
    },
    npc2: {
      imgSrc: dogBandanaImg,
      isStanding: false,
      animation: "idle-up",
      animationFrame: 0,
      animationFrameLimit: 24,
      animationFrameProgress: 24,
      isWalking: false,
      position: { x: withGrid(9), y: withGrid(17) },
      behaviorLoop: [
        { type: "walk", direction: "up", time: 1000 },
        { type: "walk", direction: "up", time: 1000 },
        { type: "walk", direction: "down", time: 1000 },
        { type: "walk", direction: "down", time: 1000 },
      ],

      currentBehaviorIndex: 0,
      behaviorTimeout: null,
    },
  },
  walls: [
    { x: withGrid(7), y: withGrid(3) },
    { x: withGrid(11), y: withGrid(3) },
  ],
};

export default demoForest;
