export const animations = {
  "idle-down": [
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 0],
  ],
  "idle-up": [
    [1, 3],
    [1, 3],
    [1, 3],
    [1, 3],
  ],
  "idle-left": [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ],
  "idle-right": [
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  "walk-down": [
    [0, 0],
    [1, 0],
    [0, 0],
    [2, 0],
  ],
  "walk-up": [
    [0, 3],
    [1, 3],
    [0, 3],
    [2, 3],
  ],
  "walk-left": [
    [0, 1],
    [1, 1],
    [0, 1],
    [2, 1],
  ],
  "walk-right": [
    [0, 2],
    [1, 2],
    [0, 2],
    [2, 2],
  ],
};

export function updateAnimation(who) {
  if (!who.animation) return;
  const animationFrames = animations[who.animation];
  const animationLength = animationFrames.length || 0;
  const currentFrame = who.animationFrame;

  if (who.animationFrameProgress > 0) {
    who.animationFrameProgress -= 1;
    return;
  }

  who.animationFrameProgress = who.animationFrameLimit;

  who.animationFrame = (currentFrame + 1) % animationLength;
}
