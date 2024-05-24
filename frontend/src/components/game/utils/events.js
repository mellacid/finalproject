import { nextPosition } from "../utils/utils.js";
import { faceHero } from "../utils/utils.js";

export const startBehavior = (object) => {
  if (!object.behaviorLoop || object.behaviorLoop.length === 0) return;

  const behavior = object.behaviorLoop[object.currentBehaviorIndex];

  if (behavior.type === "stand") {
    object.animation = `idle-${behavior.direction}`;
    clearTimeout(object.behaviorTimeout);
    object.behaviorTimeout = setTimeout(() => {
      object.currentBehaviorIndex =
        (object.currentBehaviorIndex + 1) % object.behaviorLoop.length;
      startBehavior(object);
    }, behavior.time);
  }

  if (behavior.type === "walk") {
    const walkTime = behavior.time || 100;
    clearTimeout(object.behaviorTimeout);
    object.behaviorTimeout = setTimeout(() => {
      object.currentBehaviorIndex =
        (object.currentBehaviorIndex + 1) % object.behaviorLoop.length;
      walk(object, behavior.direction);
      startBehavior(object);
    }, walkTime);

    function walk(who, direction) {
      if (direction === "up") {
        who.animation = "walk-up";
        who.direction = "up";
        who.position.y -= 1;
        return;
      } else if (direction === "down") {
        who.animation = "walk-down";
        who.direction = "down";
        who.position.y += 1;
        return;
      } else if (direction === "left") {
        who.animation = "walk-left";
        who.direction = "left";
        who.position.x -= 1;
        return;
      } else if (direction === "right") {
        who.animation = "walk-right";
        who.direction = "right";
        who.position.x += 1;
        return;
      }
    }
  }
};

export const checkInteraction = (
  nextPosition,
  gameObjects,
  heroDirection,
  setShowTextMessage,
  setCurrentTextMessage
) => {
  const x = nextPosition.x;
  const y = nextPosition.y;

  Object.values(gameObjects).forEach((object) => {
    if (object.position.x === x && object.position.y === y) {
      if (object.talking) {
        faceHero(object, heroDirection);
        const index = object.currentTalkingIndex;
        const currentText = object.talking[index];
        if (index < object.talking.length) {
          setCurrentTextMessage(currentText.text);
          object.currentTalkingIndex = index + 1;
          setShowTextMessage(true);
        } else if (index === object.talking.length) {
          setShowTextMessage(false);
          object.currentTalkingIndex = 0;
        }
      }
    }
  });
};
