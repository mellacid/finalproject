import React from "react";
import { useState, useEffect, useCallback } from "react";

import HowToPlay from "../components/howToPlay.jsx";
import AreYouReady from "../components/areYouReadySlide.jsx";
import Slide1 from "../components/slide1.jsx";
import Slide2 from "../components/slide2.jsx";
import Slide3 from "../components/slide3.jsx";
import Slide4 from "../components/slide4.jsx";
import SlideIndicator from "../components/slideIndicator.jsx";

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState("howToPlay");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [gameState, setGameState] = useState(null);

  const handleNextSlide = useCallback(() => {
    if (currentSlide === "slide4") {
      return;
    }
    setShowOverlay(true);
    setTimeout(() => {
      let nextSlideIndex = currentSlideIndex + 1;
      if (nextSlideIndex > 5) {
        nextSlideIndex = 5;
      }
      setCurrentSlideIndex(nextSlideIndex);

      const slides = [
        "howToPlay",
        "areYouReady",
        "slide1",
        "slide2",
        "slide3",
        "slide4",
      ];
      setCurrentSlide(slides[nextSlideIndex]);

      setShowOverlay(false);
    }, 500);
  }, [currentSlide, currentSlideIndex, setShowOverlay]);

  const handlePreviousSlide = useCallback(() => {
    if (
      currentSlide === "intro" ||
      currentSlide === "options" ||
      currentSlide === "howToPlay" ||
      currentSlide === "gameSlide"
    ) {
      return;
    }
    setShowOverlay(true);
    setTimeout(() => {
      let previousSlideIndex = currentSlideIndex - 1;
      if (previousSlideIndex < 0) {
        previousSlideIndex = 0;
      }
      setCurrentSlideIndex(previousSlideIndex);

      const slides = [
        "howToPlay",
        "areYouReady",
        "slide1",
        "slide2",
        "slide3",
        "slide4",
      ];
      setCurrentSlide(slides[previousSlideIndex]);

      setShowOverlay(false);
    }, 500);
  }, [currentSlide, currentSlideIndex, setShowOverlay]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight":
          handleNextSlide();
          break;
        case "ArrowLeft":
          handlePreviousSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextSlide, handlePreviousSlide]);

  const handleStart = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide("howToPlay");
      setCurrentSlideIndex(0);
      setShowOverlay(false);
    }, 500);
  };

  const handleOptions = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide("options");
      setShowOverlay(false);
    }, 500);
  };

  const handleReturnToIntro = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide("intro");
      setCurrentSlideIndex(0);
      setShowOverlay(false);
    }, 500);
  };

  return (
    <div>
      <div className={`overlay ${showOverlay ? "active" : ""}`}></div>
      {currentSlide === "howToPlay" && <HowToPlay onConfirmation={() => {}} />}
      {currentSlide === "areYouReady" && (
        <AreYouReady onConfirmation={() => {}} />
      )}
      {currentSlide === "options" && <Options onReturn={handleReturnToIntro} />}
      {currentSlide === "slide1" && <Slide1 />}
      {currentSlide === "slide2" && <Slide2 />}
      {currentSlide === "slide3" && <Slide3 />}
      {currentSlide === "slide4" && <Slide4 />}

      {/*['howToPlay', 'areYouReady', 'slide1', 'slide2', 'slide3', 'slide4'].includes(currentSlide) && <button onClick={handleNextSlide}>Next</button>*/}
      {[
        "howToPlay",
        "areYouReady",
        "slide1",
        "slide2",
        "slide3",
        "slide4",
      ].includes(currentSlide) && <SlideIndicator index={currentSlideIndex} />}
    </div>
  );
};

export default Story;
