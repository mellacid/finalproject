/*import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

//App.jsx






/*import { useState } from 'react';
import '../styles/App.css';
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  
   'Erste Bild: Toprak jagt einen schmetterling vor seinem Haus',
   'Zwite Bild: Toprak schaut sich um, um zu sehen, wo er ist, und erkennt sofort, dass er sich in einem Wald verrirt hat.',
   'Dritte Bild: Toprak fühlt sich völig verloren und würde am liebsten in die Arme seines Frauchen zurückkehren.',
   'Vierte Bild: Toprak bittet den Spieler, ihm zu helfen; den Weg nach Hause zu finden.',

  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="App">
      <div>{slides[currentSlide]}</div>
      <button onClick={prevSlide}>prev</button>
      <button onClick={nextSlide}>next</button>
    </div>
  );
}
export default App;*/


// App.jsx
/*import { useState } from 'react';
import '../styles/index.css'; 
import '../styles/App.css'; 
import Intro from '../components/intro.jsx'; 
import HowToPlay from '../components/howToPlay.jsx'; 
import AreYouReady from '../components/areYouReadySlide.jsx'; 
import Slide1 from '../components/slide1.jsx';
import Slide2 from '../components/slide2.jsx';
import Slide3 from '../components/slide3.jsx';
import Slide4 from '../components/slide4.jsx';

function App() {
  const [currentSlide, setCurrentSlide] = useState('intro'); // Stato per tenere traccia della slide corrente

  const handleStart = () => {
    setCurrentSlide('howToPlay'); // Passa alla slide "HowToPlay" quando l'utente preme "Play"
  };

  const handleNextSlide = () => {
    if (currentSlide === 'howToPlay') {
      setCurrentSlide('areYouReady');
    } else if (currentSlide === 'areYouReady') {
      setCurrentSlide('slide1');
    } else if (currentSlide === 'slide1') {
      setCurrentSlide('slide2');
    } else if (currentSlide === 'slide2') {
      setCurrentSlide('slide3');
    } else if (currentSlide === 'slide3') {
      setCurrentSlide('slide4');
    } else if (currentSlide === 'slide4') {
      setCurrentSlide('intro');
    }
  };

  return (
    <div className="app-container">
      {currentSlide === 'intro' && <Intro onStart={handleStart} onNextSlide={handleNextSlide} />}
      {currentSlide === 'howToPlay' && <HowToPlay onNextSlide={handleNextSlide} />} 
      {currentSlide === 'areYouReady' && <AreYouReady onNextSlide={handleNextSlide} />} 
      
      {currentSlide === 'slide1' && <Slide1 />} 
      {currentSlide === 'slide2' && <Slide2 />}
      {currentSlide === 'slide3' && <Slide3 />}
      {currentSlide === 'slide4' && <Slide4 />}
    </div>
  );
}

export default App;*/

// App.jsx

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
  const [currentSlide, setCurrentSlide] = useState('intro'); // Stato per tenere traccia della slide corrente

  const handleStart = () => {
    setCurrentSlide('howToPlay'); // Passa alla slide "HowToPlay" quando l'utente preme "Play"
    confirmSlide('howToPlay'); // Conferma la visualizzazione della slide "HowToPlay"
  };

  const handleOptions = () => {
    setCurrentSlide('options'); 
    confirmSlide('options'); 
    console.log('Navigated to Options');
  };

  const handleReturnToIntro = () => {
    setCurrentSlide('intro'); 
    confirmSlide('intro'); 
    console.log('Navigated to Intro');
  }

  const confirmSlide = (slideName) => {
    console.log(`Navigated to ${slideName}`);
  };

  const handleNextSlide = () => {
    switch (currentSlide) {
      case 'intro':
        setCurrentSlide('howToPlay');
        confirmSlide('howToPlay');
        break;
      case 'howToPlay':
        setCurrentSlide('areYouReady');
        confirmSlide('areYouReady');
        break;
      case 'areYouReady':
        setCurrentSlide('slide1');
        confirmSlide('slide1');
        break;
      case 'slide1':
        setCurrentSlide('slide2');
        confirmSlide('slide2');
        break;
      case 'slide2':
        setCurrentSlide('slide3');
        confirmSlide('slide3');
        break;
      case 'slide3':
        setCurrentSlide('slide4');
        confirmSlide('slide4');
        break;
      case 'slide4':
        setCurrentSlide('intro');
        confirmSlide('intro');
        break;
      default:
        setCurrentSlide('intro'); // Imposta intro come slide predefinita se il caso non è gestito
        confirmSlide('intro');
        break;
    }
  };

  return (
    <div className="app-container">
      {currentSlide !== 'intro' && currentSlide !== 'options' && <button onClick={handleNextSlide}>Next</button>}
      {currentSlide === 'intro' && <Intro onStart={handleStart} onOptions={handleOptions} />}
      {currentSlide === 'howToPlay' && <HowToPlay onConfirmation={confirmSlide} />} 
      {currentSlide === 'areYouReady' && <AreYouReady onConfirmation={confirmSlide} />} 
      {currentSlide === 'options' && <Options onReturn={handleReturnToIntro} />} {/* Passa la funzione handleReturnToIntro come prop */}
      
      {currentSlide === 'slide1' && <Slide1 />} 
      {currentSlide === 'slide2' && <Slide2 />}
      {currentSlide === 'slide3' && <Slide3 />}
      {currentSlide === 'slide4' && <Slide4 />}
    </div>
  );
}

export default App;

