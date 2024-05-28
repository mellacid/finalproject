import introImage from "../assets/lost-paws4.png";

import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <div className="intro-container" tabIndex={0}>
      <img src={introImage} alt="" />
      {/*<h1>TOPRAK</h1>*/}
      {/*<h4>LOST PAWS</h4>*/}

      <Link className="underline" to="/story">
        <button>Play</button>
      </Link>

      <Link className="underline" to="/options">
        <button>Options</button>
        </Link>

      <Link className="underline" to="/connect">
        <button>Connect</button>
        </Link>
    </div>
  );
}

export default IntroPage;
