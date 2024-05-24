// GameSlide.jsx
import PropTypes from "prop-types";
import Game from "./game/Game.jsx";

const GameSlide = ({ onReturn }) => (
  <div className="game-slide-container">
    <h1>GAME</h1>
    <Game />
    <button onClick={onReturn}>Back to menu</button>
  </div>
);

GameSlide.propTypes = {
  onReturn: PropTypes.func.isRequired,
};

export default GameSlide;
