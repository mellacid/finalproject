

// SlideIndicator.jsx
import PropTypes from 'prop-types';

const SlideIndicator = ({ index, onDotClick }) => (
  <div className="slide-indicator">
    {Array.from({ length: 7 }, (_, i) => (
      <span
        key={i}
        className={`dot ${index === i ? 'active' : ''}`}
        onClick={() => onDotClick(i)} // Aggiungi l'evento onClick qui
      ></span>
    ))}
  </div>
);

SlideIndicator.propTypes = {
  index: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired, // Aggiungi la prop onDotClick
};

export default SlideIndicator;
