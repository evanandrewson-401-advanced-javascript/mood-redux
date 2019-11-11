import React from 'react';
import PropTypes from 'prop-types';

const StartButton = ({ dispatch }) => {
  return <button onClick={() => dispatch({ type: 'TOGGLE_START' })} >Start game</button>;
};

StartButton.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default StartButton;
