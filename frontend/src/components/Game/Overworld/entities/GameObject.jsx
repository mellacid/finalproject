import React, { useState, useEffect } from "react";

const animations = {
  idleDown: [[0, 0]],
};

const GameObject = ({ x, y, sprite }) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [currentAnimation, setCurrentAnimation] = useState(animations.idleDown);
  const [currentFrame, setCurrentFrame] = useState(0);
  const { isLoaded, setIsLoaded } = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = sprite;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  function draw(ctx) {
    setPosition({ x: x * 16, y: y * 16 - 16 });
  }

  return <></>;
};

export default GameObject;
