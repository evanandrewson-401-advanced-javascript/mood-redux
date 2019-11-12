import React from 'react';
import PropTypes from 'prop-types';
import styles from './StartButton.css';

const StartButton = ({ dispatch }) => {
  return <button className={styles.StartButton} onClick={() => dispatch({ type: 'TOGGLE_START' })} >Start game</button>;
};

StartButton.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default StartButton;
