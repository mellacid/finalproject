import { nextPosition } from "../utils/utils.js";

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
    object.animation = `walk-${behavior.direction}`;
    object.isWalking = true;
    object.position = nextPosition(
      object.position.x,
      object.position.y,
      behavior.direction
    );

    const walkTime = behavior.time || 1000;

    clearTimeout(object.behaviorTimeout);
    object.behaviorTimeout = setTimeout(() => {
      object.currentBehaviorIndex =
        (object.currentBehaviorIndex + 1) % object.behaviorLoop.length;
      startBehavior(object);
    }, walkTime);
  }
};
