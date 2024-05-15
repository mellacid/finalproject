import forestMapImage from "../../../assets/images/maps/map.png";
import heroImage from "../../../assets/images/sprites/dog.jpg";

const demoForest = {
  map: {
    imgSrc: forestMapImage,
  },

  hero: {
    imgSrc: heroImage,
    animation: "walk-left",
    animationFrame: 0,
    isWalking: false,
    position: { x: 9, y: 4.5 },
  },
};

export default demoForest;
