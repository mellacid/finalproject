



// App.jsx
import { useState } from 'react';
import '../styles/index.css';
import '../styles/App.css';
import Intro from '../components/intro.jsx';
import Options from '../components/options.jsx';
import HowToPlay from '../components/howToPlay.jsx';
import AreYouReady from '../components/areYouReadySlide.jsx';
import Slide1 from '../components/slide1.jsx';
import Slide2 from '../components/slide2.jsx';
import Slide3 from '../components/slide3.jsx';
import Slide4 from '../components/slide4.jsx';
import SlideIndicator from '../components/slideIndicator.jsx';

function App() {
  const [currentSlide, setCurrentSlide] = useState('intro');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleStart = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide('howToPlay');
      setCurrentSlideIndex(1);
      setShowOverlay(false);
    }, 500);
  };

  const handleOptions = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide('options');
      setShowOverlay(false);
    }, 500);
  };

  const handleReturnToIntro = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide('intro');
      setCurrentSlideIndex(0);
      setShowOverlay(false);
    }, 500);
  };

  const handleNextSlide = () => {
    setShowOverlay(true);
    setTimeout(() => {
      let nextSlideIndex = currentSlideIndex + 1;
      if (nextSlideIndex > 6) {
        nextSlideIndex = 0;
      }
      setCurrentSlideIndex(nextSlideIndex);

      const slides = ['intro', 'howToPlay', 'areYouReady', 'slide1', 'slide2', 'slide3', 'slide4'];
      setCurrentSlide(slides[nextSlideIndex]);

      setShowOverlay(false);
    }, 500);
  };

  return (
    <div className="app-container">
      <div className={`overlay ${showOverlay ? 'active' : ''}`}></div>
      {currentSlide === 'intro' && <Intro onStart={handleStart} onOptions={handleOptions} />}
      {currentSlide === 'howToPlay' && <HowToPlay onConfirmation={() => {}} />}
      {currentSlide === 'areYouReady' && <AreYouReady onConfirmation={() => {}} />}
      {currentSlide === 'options' && <Options onReturn={handleReturnToIntro} />}
      {currentSlide === 'slide1' && <Slide1 />}
      {currentSlide === 'slide2' && <Slide2 />}
      {currentSlide === 'slide3' && <Slide3 />}
      {currentSlide === 'slide4' && <Slide4 />}
      {currentSlide !== 'intro' && currentSlide !== 'options' && <button onClick={handleNextSlide}>Next</button>}
      {['howToPlay', 'areYouReady', 'slide1', 'slide2', 'slide3', 'slide4'].includes(currentSlide) && <SlideIndicator index={currentSlideIndex} />}
    </div>
  );
}

export default App;
