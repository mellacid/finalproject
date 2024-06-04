import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";
import LanguageContextProvider from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </HashRouter>
  </React.StrictMode>
);
