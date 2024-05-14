



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



function App() {
  const [currentSlide, setCurrentSlide] = useState('intro');
  const [showOverlay, setShowOverlay] = useState(false);

  const handleStart = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide('howToPlay');
      setShowOverlay(false);
    }, 500); // Tempo dell'animazione (500ms)
  };

  const handleOptions = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide('options');
      setShowOverlay(false);
    }, 500); // Tempo dell'animazione (500ms)
    console.log('Navigated to Options');
  };

  const handleReturnToIntro = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentSlide('intro');
      setShowOverlay(false);
    }, 500); // Tempo dell'animazione (500ms)
    console.log('Navigated to Intro');
  };

  const handleNextSlide = () => {
    setShowOverlay(true);
    setTimeout(() => {
      switch (currentSlide) {
        case 'intro':
          setCurrentSlide('howToPlay');
          break;
        case 'howToPlay':
          setCurrentSlide('areYouReady');
          break;
        case 'areYouReady':
          setCurrentSlide('slide1');
          break;
        case 'slide1':
          setCurrentSlide('slide2');
          break;
        case 'slide2':
          setCurrentSlide('slide3');
          break;
        case 'slide3':
          setCurrentSlide('slide4');
          break;
        case 'slide4':
          setCurrentSlide('intro');
          break;
        default:
          setCurrentSlide('intro');
          break;
      }
      setShowOverlay(false);
    }, 500); // Tempo dell'animazione (500ms)
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
    </div>
  );
}

export default App;

