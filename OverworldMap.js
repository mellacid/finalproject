class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y
    );
  }
  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x}, ${y}`] || false;
  }

  mountObjects() {
    Object.values(this.gameObjects).forEach((o) => {
      // todo determine if this object should actually mount
      o.mount(this);
      console.log("Mounted object at position:", o.x, o.y);
    });
  }

  addWall(x, y) {
    this.walls[`${x}, ${y}`] = true;
  }
  removeWall(x, y) {
    delete this.walls[`${x}, ${y}`];
  }
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const { x, y } = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }
}

window.OverworldMaps = {
  DemoForest: {
    lowerSrc: "images/map.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(4),
        y: utils.withGrid(6),
      }),
      npc1: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(0),
        src: "images/dog2.png",
      }),
    },
    walls: {
      [utils.asGridCoord(2, -1)]: true,
      [utils.asGridCoord(2, 0)]: true,
      [utils.asGridCoord(2, 1)]: true,
      [utils.asGridCoord(2, 2)]: true,
      [utils.asGridCoord(2, 3)]: true,
      [utils.asGridCoord(2, 4)]: true,
      [utils.asGridCoord(2, 5)]: true,
      [utils.asGridCoord(2, 6)]: true,
      [utils.asGridCoord(2, 7)]: true,
    },
  },
  DemoStreet: {
    lowerSrc: "images/map2.webp",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 9,
        src: "images/dog2.png",
      }),
      npc2: new GameObject({
        x: 10,
        y: 11,
        src: "images/dog2.png",
      }),
    },
  },
};
