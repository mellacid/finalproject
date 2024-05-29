import { nextPosition } from "../utils/utils.js";
import { faceHero } from "../utils/utils.js";
import { withGrid } from "../utils/utils.js";

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
  showTextMessage,
  setShowTextMessage,
  setCurrentTextMessage,
  truffle,
  setTruffle,
  setItemContainer,
  language
) => {
  console.log("language (checkInt) :", language);

  const x = nextPosition.x;
  const y = nextPosition.y;

  Object.values(gameObjects).forEach((object) => {
    if (object.position.x === x && object.position.y === y) {
      if (object.item) {
        pickupItem(object, setTruffle, setItemContainer);
      }

      if (object.talking) {
        faceHero(object, heroDirection);

        if (object.id === "npc1" && truffle) {
          setItemContainer([]);
          triggerEvent(
            object,
            setCurrentTextMessage,
            setShowTextMessage,
            language
          );
          return;
        }

        const index = object.currentTalkingIndex;
        const currentText = object.talking[index];
        if (index < object.talking.length) {
          setCurrentTextMessage(currentText.text[language]);

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
  setShowTextMessage,
  language
) => {
  const index = object.currentEventIndex;
  const eventLength = object.event.length;

  if (index >= eventLength) return; // Stop if all events are processed

  const event = object.event[index];
  const type = event.type;

  if (type === "textMessage") {
    const text = event.text[language];
    setCurrentTextMessage(text);
    setShowTextMessage(true);
    object.currentEventIndex = index + 1;
  }

  if (type === "walk") {
    setShowTextMessage(false);
    const direction = event.direction;
    const time = event.time || 1000;

    object.animation = `walk-${direction}`;
    object.isWalking = true;
    object.position = nextPosition(
      object.position.x,
      object.position.y,
      direction
    );

    setTimeout(() => {
      // After walking, trigger the next event recursively
      triggerEvent(object, setCurrentTextMessage, setShowTextMessage);
    }, time);

    object.currentEventIndex = index + 1;
  }
};

export const pickupItem = (object, setTruffle, setItemContainer) => {
  setTruffle(true);
  setItemContainer((prev) => {
    return [...prev, object.id];
  });
  object.position = { x: withGrid(-100), y: withGrid(-100) };
};
