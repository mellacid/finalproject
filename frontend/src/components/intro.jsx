/*import '../styles/App.css';

function Intro() {
  const handlePlayClick = () => {
    window.location.href = '/game';
  };

  const handleOptionsClick = () => {
    window.location.href = '/options';
  };

  return (
    <div className="intro-container">
      
      <h1>TOPRAK</h1>
      <h4>LOST PAWS</h4>
      
    
      <div>
        <button onClick={handlePlayClick}>Play</button>
        <button onClick={handleOptionsClick}>Options</button>
      </div>
    </div>
  );
}

export default Intro;*/

// intro.jsx
/*import { useState } from 'react';
import Slide1 from '../components/slide1.jsx';
import Slide2 from '../components/slide2.jsx';
import Slide3 from '../components/slide3.jsx';
import Slide4 from '../components/slide4.jsx';

// ... altri import delle slide

function Intro() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="intro-container" onKeyDown={handleKeyPress} tabIndex="0">
      {currentSlide === 1 && <Slide1 />}
      {currentSlide === 2 && <Slide2 />}
      {currentSlide === 3 && <Slide3 />}
      {currentSlide === 4 && <Slide4 />}
    </div>
  );
}

export default Intro;*/




// intro.jsx


import PropTypes from 'prop-types';
import introImage from '../assets/toprak-intro2.jpeg';



function IntroPage({ onStart, onOptions}) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onStart(); // Passa alla prossima slide quando l'utente preme "Enter"
    }
  };

  return (
    <div className="intro-container" onKeyPress={handleKeyPress} tabIndex={0}>
     <img src={introImage} alt="" />
      {/*<h1>TOPRAK</h1>*/}
      {/*<h4>LOST PAWS</h4>*/}
      <button onClick={onStart}>Play</button>
      <button onClick={onOptions}>Options</button>
      
    </div>
  );
}

IntroPage.propTypes = {
  onStart: PropTypes.func.isRequired,
  onOptions: PropTypes.func.isRequired,
 
};

export default IntroPage;





