//Options.jsx

/*import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Options() {
  const navigate = useNavigate(); // Ottieni la funzione di navigazione

  const handleReturn = () => {
    navigate('/'); // Naviga alla pagina di introduzione quando il bottone viene premuto
  };

  return (
    <div>
      <h1>Options</h1>
      <p>Options here...</p>
      <button onClick={handleReturn}>Return to intro</button> 
    </div>
  );
}

Options.propTypes = {
  onReturn: PropTypes.func.isRequired,
};

export default Options;*/

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageContext";
import { getTranslation } from "../translations/translations";

function Options() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguageContext();
  const t = getTranslation(language);

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>{t.options}</h1>
      <p>{t.options}</p>
      <button onClick={handleReturn}>{t.return}</button>

      <div>
        <h2>{t.language}</h2>
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("de")}>Deutsch</button>
        <button onClick={() => setLanguage("it")}>Italiano</button>
        <button onClick={() => setLanguage("pl")}>Polski</button>
        <button onClick={() => setLanguage("tr")}>Türkçe</button>
      </div>
    </div>
  );
}

/*Options.propTypes = {
  onReturn: PropTypes.func.isRequired,
};*/

export default Options;
