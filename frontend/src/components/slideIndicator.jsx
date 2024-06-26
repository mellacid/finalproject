// SlideIndicator.jsx
import PropTypes from "prop-types";

const SlideIndicator = ({ index, onDotClick }) => (
  <div className="slide-indicator">
    {Array.from({ length: 6 }, (_, i) => (
      <span
        key={i}
        className={`dot ${index === i ? "active" : ""}`}
        onClick={() => onDotClick(i)}
      ></span>
    ))}
  </div>
);

export default SlideIndicator;
