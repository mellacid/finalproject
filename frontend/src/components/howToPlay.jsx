


import React from 'react';
import PropTypes from 'prop-types';
import howToPlay from '../assets/howToPlay.png';


function HowToPlay({ onConfirmation }) {
  React.useEffect(() => {
    onConfirmation('howToPlay');
  }, [onConfirmation]);

  const text = "HOW TO PLAY";
  const words = text.split(' ');

  return (
    <div className='container-howToPlay'>
       <h1 className='howToPlay-h1'>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="word">
            {word.split('').map((letter, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {letter}
              </span>
            ))}
            {wordIndex < words.length - 1 && <span className="space"> </span>}
          </span>
        ))}
      </h1>
      <img className='howToPlay-image' src={howToPlay} alt="howToPlay" />
    </div>
  );
}

HowToPlay.propTypes = {
  onConfirmation: PropTypes.func.isRequired,
};

export default HowToPlay;
