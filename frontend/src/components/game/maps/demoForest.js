import { withGrid } from "../utils/utils.js";

import forestLowerMapImage from "../../../assets/images/maps/forest-map-lower.png";
import forestUpperMapImage from "../../../assets/images/maps/forest-map-upper.png";

import boarImg from "../../../assets/images/sprites/wildboar.png";
import catImg from "../../../assets/images/sprites/cat.png";
import dogBandanaImg from "../../../assets/images/sprites/dogs_bandana.png";
import truffleImg from "../../../assets/images/sprites/truffle.png";

const demoForest = {
  lowerMap: {
    imgSrc: forestLowerMapImage,
  },
  upperMap: {
    imgSrc: forestUpperMapImage,
  },

  hero: {
    imgSrc: dogBandanaImg,
    isPlayerControlled: true,
    animation: "idle-down",
    direction: "down",
    animationFrame: 0,
    animationFrameLimit: 24,
    animationFrameProgress: 24,
    isWalking: false,
    position: { x: withGrid(38), y: withGrid(30) },
  },
  gameObjects: {
    npc1: {
      id: "npc1",
      imgSrc: boarImg,
      animation: "idle-down",
      animationFrame: 0,
      animationFrameLimit: 24,
      animationFrameProgress: 24,
      isWalking: false,
      position: { x: withGrid(35), y: withGrid(63) },
      behaviorLoop: [
        { type: "stand", direction: "left", time: 2000 },
        { type: "stand", direction: "down", time: 2000 },
        { type: "stand", direction: "right", time: 2000 },
        { type: "stand", direction: "down", time: 2000 },
      ],
      talking: [
        {
          type: "textMessage",
          text: {
            de: "Hallo, ich bin Giaco das Wildschwein!",
            en: "Hello, I am Giaco the wild boar!",
          },
          faceHero: "npc1",
        },
        {
          type: "textMessage",
          text: {
            de: "Ich will Trüffel! *Grunz*",
            en: "I want truffles! *Oink*",
          },
        },
      ],
      event: [
        {
          type: "textMessage",
          text: { de: "Danke für den Trüffel!", en: "Thanks for the truffle!" },
        },
        { type: "textMessage", text: { de: "Ich bin satt!", en: "I'm full!" } },
        {
          type: "textMessage",
          text: { de: "Ich gehe jetzt schlafen!", en: "I'm going to sleep!" },
        },
        { type: "walk", direction: "down", time: 1000 },
        { type: "walk", direction: "down", time: 1000 },
        { type: "walk", direction: "down", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
        { type: "walk", direction: "down", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
        { type: "walk", direction: "down", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
        { type: "walk", direction: "right", time: 1000 },
      ],
      currentTalkingIndex: 0,
      currentBehaviorIndex: 0,
      currentEventIndex: 0,
      behaviorTimeout: null,
    },
    npc2: {
      id: "npc2",
      imgSrc: catImg,
      animation: "idle-down",
      animationFrame: 0,
      animationFrameLimit: 24,
      animationFrameProgress: 24,
      isWalking: false,
      position: { x: withGrid(38), y: withGrid(22) },
      behaviorLoop: [
        { type: "stand", direction: "left", time: 2000 },
        { type: "stand", direction: "down", time: 2000 },
        { type: "stand", direction: "right", time: 2000 },
        { type: "stand", direction: "down", time: 2000 },
      ],
      talking: [
        {
          type: "textMessage",
          text: {
            de: "Hallo, du suchst dein Frauchen?",
            en: "Hello, are you looking for your owner?",
          },
          faceHero: "npc2",
        },
        {
          type: "textMessage",
          text: { de: "Folge dem Pfad! *Miau*", en: "Follow the path! *Meow*" },
        },
      ],
      currentTalkingIndex: 0,
      currentBehaviorIndex: 0,
      behaviorTimeout: null,
    },
    npc3: {
      id: "npc3",
      imgSrc: catImg,
      animation: "idle-up",
      animationFrame: 0,
      animationFrameLimit: 24,
      animationFrameProgress: 24,
      isWalking: false,
      position: { x: withGrid(10), y: withGrid(63) },
      behaviorLoop: [
        { type: "stand", direction: "left", time: 2000 },
        { type: "stand", direction: "up", time: 2000 },
        { type: "stand", direction: "left", time: 2000 },
        { type: "stand", direction: "down", time: 2000 },
      ],
      talking: [
        {
          type: "textMessage",
          text: {
            de: "Du willst zu deinem Frauchen?",
            en: "You want to find your owner?",
          },
          faceHero: "npc3",
        },
        {
          type: "textMessage",
          text: {
            de: "Dazu musst du am Wildschwein vorbei! *Miau*",
            en: "You have to pass the wild boar! *Meow*",
          },
        },
      ],
      currentTalkingIndex: 0,
      currentBehaviorIndex: 0,
      currentEventIndex: 0,
      behaviorTimeout: null,
    },
    truffle: {
      id: "truffle",
      imgSrc: truffleImg,
      animation: "item",
      animationFrame: 0,
      position: { x: withGrid(-100), y: withGrid(-100) },
      item: true,
    },
  },
  walls: [
    { x: withGrid(7), y: withGrid(3) },
    { x: withGrid(11), y: withGrid(3) },
  ],
};

export default demoForest;
