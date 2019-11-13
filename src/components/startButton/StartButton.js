import React from 'react';
import PropTypes from 'prop-types';
import styles from './StartButton.css';

const StartButton = ({ toggleStart }) => {
  return <button className={styles.StartButton} onClick={() => toggleStart()} >Start game</button>;
};

StartButton.propTypes = {
  toggleStart: PropTypes.func.isRequired
};

export default StartButton;
