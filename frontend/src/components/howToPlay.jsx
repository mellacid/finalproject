// HowToPlay.jsx


import React from 'react';
import PropTypes from 'prop-types';

function HowToPlay({ onConfirmation }) {
  React.useEffect(() => {
    onConfirmation('howToPlay'); // Passa il nome della slide corrente
  }, [onConfirmation]);

  return (
    <div>
      {/* Contenuto della slide "HowToPlay" */}
      <h1>How To Play</h1>
      <p>Instructions here...</p>
      

    </div>
  );
}

HowToPlay.propTypes = {
  onConfirmation: PropTypes.func.isRequired,
};

export default HowToPlay;


