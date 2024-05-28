export function withGrid(n) {
  return n * 24;
}

export function asGridCoord(x, y) {
  return `${x * 24}, ${y * 24}`;
}

export function walk(who, direction, isWall) {
  if (direction === "up") {
    who.animation = "walk-up";
    who.direction = "up";
  } else if (direction === "down") {
    who.animation = "walk-down";
    who.direction = "down";
  } else if (direction === "left") {
    who.animation = "walk-left";
    who.direction = "left";
  } else if (direction === "right") {
    who.animation = "walk-right";
    who.direction = "right";
  }

  const nextCoord = nextPosition(
    Math.round(who.position.x / 24) * 24,
    Math.round(who.position.y / 24) * 24,
    who.direction
  );

  if (isWall(nextCoord)) {
    console.log("hier is ne Wall!!!");
    return;
  }

  const step = 1;
  if (direction === "up") {
    who.position.y -= step;
  } else if (direction === "down") {
    who.position.y += step;
  } else if (direction === "left") {
    who.position.x -= step;
  } else if (direction === "right") {
    who.position.x += step;
  }
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

export function faceHero(object, heroDirection) {
  if (heroDirection === "up") {
    object.animation = "idle-down";
  } else if (heroDirection === "down") {
    object.animation = "idle-up";
  } else if (heroDirection === "left") {
    object.animation = "idle-right";
  } else if (heroDirection === "right") {
    object.animation = "idle-left";
  }
}
