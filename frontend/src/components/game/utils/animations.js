export const animations = {
  "idle-down": [[0, 0]],
  "idle-up": [[0, 2]],
  "idle-left": [[0, 3]],
  "idle-right": [[0, 1]],
  "walk-down": [
    [1, 0],
    [0, 0],
    [3, 0],
    [0, 0],
  ],
  "walk-up": [
    [1, 2],
    [0, 2],
    [3, 2],
    [0, 2],
  ],
  "walk-left": [
    [1, 3],
    [0, 3],
    [3, 3],
    [0, 3],
  ],
  "walk-right": [
    [1, 1],
    [0, 1],
    [3, 1],
    [0, 1],
  ],
};

export function updateAnimation(who) {
  if (!who.animation) return;
  const animationFrames = animations[who.animation];
  const animationLength = animationFrames.length || 0;
  const currentFrame = who.animationFrame;

  for (let i = 0; i < animationLength - 1; i++) {
    if (currentFrame === animationLength - 1) {
      who.animationFrame = 0;
      return;
    } else if (currentFrame === i) {
      who.animationFrame = currentFrame + 1;
      return;
    }
  }
}
