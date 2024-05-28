
//Options.jsx



import PropTypes from 'prop-types';

function Options({ onReturn }) {
  return (
    <div>
      {/* Contenuto della slide "Options" */}
      <h1>Options</h1>
      <p>Options here...</p>
      <button onClick={onReturn}>Return to intro</button> {/* Utilizza la prop onReturn */}
    </div>
  );
}

Options.propTypes = {
  onReturn: PropTypes.func.isRequired,
};

export default Options;


