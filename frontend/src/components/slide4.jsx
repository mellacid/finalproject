import { Link } from "react-router-dom";

import slide4Image from "../assets/toprak4.jpeg";

function Slide4() {
  return (
    <div className="slide4-container">
      <img src={slide4Image} alt="Slide 4" />
      <button>
        <Link to="/game">Play</Link>
      </button>
    </div>
  );
}

export default Slide4;
