import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/index.css";
import "../styles/App.css";
import Intro from "../components/intro.jsx";
import Story from "../components/Story.jsx";
import Options from "../components/options.jsx";

import GameSlide from "../components/gameSlide.jsx";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/story" element={<Story />} />
        <Route path="/game" element={<GameSlide />} />
      </Routes>
      ;
    </div>
  );
}

export default App;
