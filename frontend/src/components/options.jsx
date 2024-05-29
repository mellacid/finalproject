
//Options.jsx

import PropTypes from 'prop-types';
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

export default Options;
