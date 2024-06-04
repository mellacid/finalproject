import Game from "./game/Game.jsx";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageContext.jsx";
import { getTranslation } from "../translations/translations.jsx";
const GameSlide = () => {
  const { language } = useLanguageContext();
  const t = getTranslation(language);
  return (
    <div className="game-slide-container">
      <Game />
      <Link
        className="underline"
        to="/"
        style={{ textDecoration: "none", color: "black" }}
      >
        <button>{t.backtomenu}</button>
      </Link>
    </div>
  );
};

export default GameSlide;
