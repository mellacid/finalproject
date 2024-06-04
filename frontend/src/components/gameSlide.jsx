import Game from "./game/Game.jsx";
import { Link } from "react-router-dom";
const GameSlide = () => (
  <div className="game-slide-container">
    <h1>GAME</h1>
    <Game />
    <Link
      className="underline"
      to="/"
      style={{ textDecoration: "none", color: "black" }}
    >
      <button>Back to menu</button>
    </Link>
  </div>
);

export default GameSlide;
