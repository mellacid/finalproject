

// GameSlide.jsx
import PropTypes from 'prop-types';

const GameSlide = ({ onReturn }) => (
  <div>
    <h1>GAME</h1>
    {/* Inserisci qui il tuo gioco */}
    <button onClick={onReturn}>Back to menu</button>
  </div>
);

GameSlide.propTypes = {
  onReturn: PropTypes.func.isRequired,
};

export default GameSlide;
