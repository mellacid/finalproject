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

export const checkInteraction = (
  nextPosition,
  gameObjects,
  heroDirection,
  showTextMessage,
  setShowTextMessage,
  setCurrentTextMessage,
  truffle,
  setTruffle
) => {
  const x = nextPosition.x;
  const y = nextPosition.y;

  Object.values(gameObjects).forEach((object) => {
    if (object.position.x === x && object.position.y === y) {
      if (object.talking) {
        faceHero(object, heroDirection);

        if (object.id === "npc1" && truffle) {
          triggerEvent(object, setCurrentTextMessage, setShowTextMessage);
          return;
        }

        const index = object.currentTalkingIndex;
        const currentText = object.talking[index];
        if (index < object.talking.length) {
          setCurrentTextMessage(currentText.text);

          if (!showTextMessage) {
            setShowTextMessage(true);
          }

          object.currentTalkingIndex = index + 1;
        } else if (index === object.talking.length) {
          setShowTextMessage(false);
          object.currentTalkingIndex = 0;
        }
      }
    }
  });
};

export const triggerEvent = (
  object,
  setCurrentTextMessage,
  setShowTextMessage
) => {
  const index = object.currentEventIndex;
  const eventLength = object.event.length;

  const type = object.event[index].type;

  if (type === "textMessage") {
    const text = object.event[index].text;
    setCurrentTextMessage(text);
    setShowTextMessage(true);
    object.currentEventIndex = index + 1;
  }

  if (type === "walk") {
    setShowTextMessage(false);
    for (let i = index; i < eventLength; i++) {
      const direction = object.event[i].direction;
      const time = object.event[i].time;

      object.animation = `walk-${direction}`;
      object.isWalking = true;
      object.position = nextPosition(
        object.position.x,
        object.position.y,
        direction
      );

      const walkTime = time || 1000;

      clearTimeout(time);
      object.behaviorTimeout = setTimeout(() => {
        object.currentBehaviorIndex =
          (object.currentBehaviorIndex + 1) % object.behaviorLoop.length;
      }, walkTime);

      object.currentEventIndex = i + 1;
    }
  }
};
