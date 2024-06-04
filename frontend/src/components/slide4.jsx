import { Link } from "react-router-dom";

import slide4Image from "../assets/helpMe.png";
import {useLanguageContext} from "../context/LanguageContext";
import { getTranslation } from "../translations/translations";

function Slide4() {
  const {language} = useLanguageContext();
  const t = getTranslation(language);
  return (
    <div className="slide4-container">
      <img src={slide4Image} alt="Slide 4" />
      <p className="helpme-text">{t.helpme}</p>
        <Link className="underline" to="/game" style={{ textDecoration: 'none', color: 'black' }}>
          <button>{t.play}</button>
          </Link>
      
    </div>
  );
}

export default Slide4;
