import { Link } from "react-router-dom";

import slide4Image from "../assets/toprak4.png";

function Slide4() {
  return (
    <div className="slide4-container">
      <img src={slide4Image} alt="Slide 4" />
      
        <Link className="underline" to="/game" style={{ textDecoration: 'none', color: 'black' }}>
          <button>Play</button>
          </Link>
      
    </div>
  );
}

export default Slide4;
