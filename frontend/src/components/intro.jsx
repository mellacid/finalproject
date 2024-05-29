//intro.jsx
/*import introImage from "../assets/lost-paws4.png";
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

export default IntroPage;*/



import introImage from "../assets/lost-paws4.png";
import "../styles/index.css";
import "../styles/App.css";
import { Link } from "react-router-dom";
import {useLanguageContext} from "../context/LanguageContext.jsx";
import { getTranslation } from "../translations/translations.jsx";

const IntroPage = () => {
  const { language } = useLanguageContext();
  console.log(language);
  const t = getTranslation(language);

  return (
    <div className="intro-container" tabIndex={0}>
      <img src={introImage} alt="" />

      <Link className="underline" to="/story" style={{ textDecoration: 'none', color: 'black' }}>
        <button>{t.play}</button>
      </Link>

      <Link className="underline" to="/options" style={{ textDecoration: 'none', color: 'black' }}>
        <button>{t.options}</button>
      </Link>

      <Link className="underline" to="/connect" style={{ textDecoration: 'none', color: 'black' }}>
        <button>{t.connect}</button>
      </Link>
    </div>
  );
};

export default IntroPage;

