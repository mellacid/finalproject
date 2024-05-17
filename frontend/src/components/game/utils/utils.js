export function withGrid(n) {
  return n * 24;
}

export function asGridCoord(x, y) {
  return `${x * 24}, ${y * 24}`;
}

export function nextPosition(initialX, initialY, direction) {
  let x = initialX;
  let y = initialY;
  const size = 24;
  if (direction === "down") {
    y += size;
  } else if (direction === "up") {
    y -= size;
  } else if (direction === "left") {
    x -= size;
  } else if (direction === "right") {
    x += size;
  }
  return { x, y };
}
