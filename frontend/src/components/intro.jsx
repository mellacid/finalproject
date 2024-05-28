//intro.jsx
import introImage from "../assets/lost-paws4.png";
import "../styles/index.css";
import "../styles/App.css";
import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <div className="intro-container" tabIndex={0}>
      <img src={introImage} alt="" />
      
      <Link 
        to="/story" 
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <button>Play</button>
      </Link>

      <Link 
        to="/options" 
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <button>Options</button>
      </Link>

      <Link 
        to="/connect" 
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <button>Connect</button>
      </Link>
    </div>
  );
}

export default IntroPage;
