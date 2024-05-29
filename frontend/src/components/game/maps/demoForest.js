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
            it: "Ciao, sono Giaco il cinghiale!",
            pl: "Cześć, jestem Giaco dzik!",
            tr: "Merhaba, ben vahşi domuz Giaco!",
          },
          faceHero: "npc1",
        },
        {
          type: "textMessage",
          text: {
            de: "Ich will Trüffel! *Grunz*",
            en: "I want truffles! *Oink*",
            it: "Voglio tartufi! *Grugnito*",
            pl: "Chcę trufle! *Chrum*",
            tr: "Ben trüf istiyorum! *Hırıltı*",
          },
        },
      ],
      event: [
        {
          type: "textMessage",
          text: {
            de: "Danke für den Trüffel!",
            en: "Thanks for the truffle!",
            it: "Grazie per il tartufo!",
            pl: "Dzięki za truflę!",
            tr: "Trüf için teşekkürler!",
          },
        },
        {
          type: "textMessage",
          text: {
            de: "Ich bin satt!",
            en: "I'm full!",
            it: "Sono sazio!",
            pl: "Jestem najedzony!",
            tr: "Ben doydum!",
          },
        },
        {
          type: "textMessage",
          text: {
            de: "Ich gehe jetzt schlafen!",
            en: "I'm going to sleep!",
            it: "Vado a dormire!",
            pl: "Idę spać!",
            tr: "Şimdi uyuyacağım!",
          },
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
            it: "Ciao, stai cercando il tuo padrone?",
            pl: "Cześć, szukasz właściciela?",
            tr: "Merhaba, sahibini mi arıyorsun?",
          },
          faceHero: "npc2",
        },
        {
          type: "textMessage",
          text: {
            de: "Folge dem Pfad! *Miau*",
            en: "Follow the path! *Meow*",
            it: "Segui il sentiero! *Miao*",
            pl: "Podążaj ścieżką! *Miau*",
            tr: "Yolu takip et! *Miyav*",
          },
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
            it: "Vuoi trovare il tuo padrone?",
            pl: "Chcesz znaleźć swojego właściciela?",
            tr: "Sahibini mi bulmak istiyorsun?",
          },
          faceHero: "npc3",
        },
        {
          type: "textMessage",
          text: {
            de: "Dazu musst du am Wildschwein vorbei! *Miau*",
            en: "You have to pass the wild boar! *Meow*",
            it: "Devi passare il cinghiale! *Miao*",
            pl: "Musisz przejść obok dzika! *Miau*",
            tr: "Vahşi domuzun yanından geçmelisin! *Miyav*",
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
