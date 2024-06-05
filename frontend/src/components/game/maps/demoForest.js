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
      position: { x: withGrid(42), y: withGrid(63) },
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
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
        { type: "walk", direction: "right", time: 500 },
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
            de: "Hallo, ich bin die Katze Rami! Du suchst dein Frauchen?",
            en: "Hello,I am Rami the cat! Are you looking for your owner?",
            it: "Ciao, sono il gatto Rami! Cerchi il tuo padrone?",
            pl: "Cześć jestem kot Rami! Szukasz swojego właściciela?",
            tr: "Merhaba, ben kedi Rami! Sahibini mi arıyorsun?",
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
    { x: withGrid(36), y: withGrid(23) },
    { x: withGrid(36), y: withGrid(24) },
    { x: withGrid(36), y: withGrid(25) },
    { x: withGrid(36), y: withGrid(26) },
    { x: withGrid(36), y: withGrid(27) },
    { x: withGrid(36), y: withGrid(28) },
    { x: withGrid(34), y: withGrid(29) },
    { x: withGrid(34), y: withGrid(30) },
    { x: withGrid(33), y: withGrid(30) },
    { x: withGrid(34), y: withGrid(31) },
    { x: withGrid(34), y: withGrid(31) },
    { x: withGrid(27), y: withGrid(31) },
    { x: withGrid(28), y: withGrid(31) },
    { x: withGrid(30), y: withGrid(31) },
    { x: withGrid(31), y: withGrid(31) },
    { x: withGrid(32), y: withGrid(31) },
    { x: withGrid(33), y: withGrid(31) },
    { x: withGrid(34), y: withGrid(31) },
    { x: withGrid(34), y: withGrid(31) },
    { x: withGrid(25), y: withGrid(32) },
    { x: withGrid(26), y: withGrid(32) },
    { x: withGrid(26), y: withGrid(32) },
    { x: withGrid(16), y: withGrid(31) },
    { x: withGrid(17), y: withGrid(31) },
    { x: withGrid(18), y: withGrid(31) },
    { x: withGrid(19), y: withGrid(31) },
    { x: withGrid(20), y: withGrid(31) },
    { x: withGrid(21), y: withGrid(31) },
    { x: withGrid(22), y: withGrid(31) },
    { x: withGrid(23), y: withGrid(30) },
    { x: withGrid(24), y: withGrid(30) },
    { x: withGrid(14), y: withGrid(30) },
    { x: withGrid(15), y: withGrid(30) },
    { x: withGrid(13), y: withGrid(31) },
    { x: withGrid(13), y: withGrid(32) },
    { x: withGrid(11), y: withGrid(33) },
    { x: withGrid(11), y: withGrid(34) },
    { x: withGrid(10), y: withGrid(35) },
    { x: withGrid(10), y: withGrid(36) },
    { x: withGrid(8), y: withGrid(37) },
    { x: withGrid(8), y: withGrid(38) },
    { x: withGrid(8), y: withGrid(39) },
    { x: withGrid(7), y: withGrid(40) },
    { x: withGrid(7), y: withGrid(41) },
    { x: withGrid(7), y: withGrid(42) },
    { x: withGrid(7), y: withGrid(43) },
    { x: withGrid(7), y: withGrid(44) },
    { x: withGrid(6), y: withGrid(45) },
    { x: withGrid(6), y: withGrid(46) },
    { x: withGrid(6), y: withGrid(47) },
    { x: withGrid(6), y: withGrid(48) },
    { x: withGrid(6), y: withGrid(49) },
    { x: withGrid(6), y: withGrid(50) },
    { x: withGrid(6), y: withGrid(51) },
    { x: withGrid(7), y: withGrid(52) },
    { x: withGrid(7), y: withGrid(53) },
    { x: withGrid(7), y: withGrid(54) },
    { x: withGrid(7), y: withGrid(55) },
    { x: withGrid(7), y: withGrid(56) },
    { x: withGrid(7), y: withGrid(57) },
    { x: withGrid(7), y: withGrid(58) },
    { x: withGrid(7), y: withGrid(59) },
    { x: withGrid(7), y: withGrid(60) },
    { x: withGrid(9), y: withGrid(61) },
    { x: withGrid(10), y: withGrid(61) },
    { x: withGrid(10), y: withGrid(62) },
    { x: withGrid(10), y: withGrid(63) },
    { x: withGrid(8), y: withGrid(63) },
    { x: withGrid(8), y: withGrid(64) },
    { x: withGrid(8), y: withGrid(65) },
    { x: withGrid(11), y: withGrid(66) },
    { x: withGrid(12), y: withGrid(66) },
    { x: withGrid(13), y: withGrid(66) },
    { x: withGrid(14), y: withGrid(66) },
    { x: withGrid(15), y: withGrid(66) },
    { x: withGrid(16), y: withGrid(66) },
    { x: withGrid(17), y: withGrid(66) },
    { x: withGrid(18), y: withGrid(66) },
    { x: withGrid(19), y: withGrid(66) },
    { x: withGrid(20), y: withGrid(66) },
    { x: withGrid(21), y: withGrid(66) },
    { x: withGrid(22), y: withGrid(66) },
    { x: withGrid(23), y: withGrid(66) },
    { x: withGrid(24), y: withGrid(66) },
    { x: withGrid(25), y: withGrid(66) },
    { x: withGrid(26), y: withGrid(66) },
    { x: withGrid(27), y: withGrid(66) },
    { x: withGrid(28), y: withGrid(66) },
    { x: withGrid(29), y: withGrid(66) },
    { x: withGrid(30), y: withGrid(66) },
    { x: withGrid(31), y: withGrid(66) },
    { x: withGrid(32), y: withGrid(66) },
    { x: withGrid(33), y: withGrid(66) },
    { x: withGrid(34), y: withGrid(66) },
    { x: withGrid(35), y: withGrid(66) },
    { x: withGrid(16), y: withGrid(61) },
    { x: withGrid(17), y: withGrid(61) },
    { x: withGrid(18), y: withGrid(61) },
    { x: withGrid(19), y: withGrid(61) },
    { x: withGrid(20), y: withGrid(61) },
    { x: withGrid(21), y: withGrid(61) },
    { x: withGrid(22), y: withGrid(61) },
    { x: withGrid(23), y: withGrid(61) },
    { x: withGrid(24), y: withGrid(61) },
    { x: withGrid(25), y: withGrid(61) },
    { x: withGrid(26), y: withGrid(61) },
    { x: withGrid(27), y: withGrid(61) },
    // { x: withGrid(28), y: withGrid(61) },
    { x: withGrid(29), y: withGrid(61) },
    { x: withGrid(30), y: withGrid(61) },
    { x: withGrid(31), y: withGrid(61) },
    { x: withGrid(32), y: withGrid(61) },
    { x: withGrid(33), y: withGrid(61) },
    { x: withGrid(34), y: withGrid(61) },
    { x: withGrid(35), y: withGrid(61) },
    { x: withGrid(36), y: withGrid(61) },
    { x: withGrid(37), y: withGrid(61) },
    { x: withGrid(38), y: withGrid(61) },
    { x: withGrid(39), y: withGrid(61) },
    { x: withGrid(40), y: withGrid(61) },
    { x: withGrid(41), y: withGrid(61) },
    { x: withGrid(39), y: withGrid(18) },
    { x: withGrid(39), y: withGrid(19) },
    { x: withGrid(39), y: withGrid(20) },
    { x: withGrid(39), y: withGrid(21) },
    { x: withGrid(39), y: withGrid(22) },
    { x: withGrid(40), y: withGrid(22) },
    { x: withGrid(40), y: withGrid(23) },
    { x: withGrid(40), y: withGrid(24) },
    { x: withGrid(40), y: withGrid(25) },
    { x: withGrid(40), y: withGrid(26) },
    { x: withGrid(40), y: withGrid(27) },
    { x: withGrid(40), y: withGrid(28) },
    { x: withGrid(40), y: withGrid(29) },
    { x: withGrid(40), y: withGrid(30) },
    { x: withGrid(40), y: withGrid(31) },
    { x: withGrid(40), y: withGrid(32) },
    { x: withGrid(39), y: withGrid(33) },
    { x: withGrid(38), y: withGrid(34) },
    { x: withGrid(26), y: withGrid(35) },
    { x: withGrid(27), y: withGrid(35) },
    { x: withGrid(28), y: withGrid(35) },
    { x: withGrid(29), y: withGrid(35) },
    { x: withGrid(30), y: withGrid(35) },
    { x: withGrid(31), y: withGrid(35) },
    { x: withGrid(32), y: withGrid(35) },
    { x: withGrid(33), y: withGrid(35) },
    { x: withGrid(34), y: withGrid(35) },
    { x: withGrid(35), y: withGrid(35) },
    { x: withGrid(36), y: withGrid(35) },
    { x: withGrid(37), y: withGrid(35) },
    { x: withGrid(23), y: withGrid(36) },
    { x: withGrid(24), y: withGrid(36) },
    { x: withGrid(25), y: withGrid(36) },
    { x: withGrid(18), y: withGrid(35) },
    { x: withGrid(19), y: withGrid(35) },
    { x: withGrid(20), y: withGrid(35) },
    { x: withGrid(21), y: withGrid(35) },
    { x: withGrid(22), y: withGrid(35) },
    { x: withGrid(16), y: withGrid(36) },
    { x: withGrid(17), y: withGrid(36) },
    { x: withGrid(15), y: withGrid(37) },
    { x: withGrid(14), y: withGrid(38) },
    { x: withGrid(13), y: withGrid(39) },
    { x: withGrid(13), y: withGrid(40) },
    { x: withGrid(12), y: withGrid(41) },
    { x: withGrid(12), y: withGrid(42) },
    { x: withGrid(12), y: withGrid(43) },
    { x: withGrid(12), y: withGrid(44) },
    { x: withGrid(12), y: withGrid(45) },
    { x: withGrid(11), y: withGrid(46) },
    { x: withGrid(11), y: withGrid(47) },
    { x: withGrid(11), y: withGrid(48) },
    { x: withGrid(11), y: withGrid(49) },
    { x: withGrid(11), y: withGrid(50) },
    { x: withGrid(11), y: withGrid(51) },
    { x: withGrid(11), y: withGrid(52) },
    { x: withGrid(11), y: withGrid(53) },
    { x: withGrid(11), y: withGrid(54) },
    { x: withGrid(11), y: withGrid(55) },
    { x: withGrid(11), y: withGrid(56) },
    { x: withGrid(12), y: withGrid(56) },
    { x: withGrid(12), y: withGrid(57) },
    { x: withGrid(12), y: withGrid(58) },
    { x: withGrid(13), y: withGrid(59) },
    { x: withGrid(13), y: withGrid(59) },
    { x: withGrid(13), y: withGrid(60) },
    { x: withGrid(13), y: withGrid(60) },
    { x: withGrid(13), y: withGrid(61) },
    { x: withGrid(14), y: withGrid(61) },
    { x: withGrid(15), y: withGrid(62) },
  ],
};

export default demoForest;
