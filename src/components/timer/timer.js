import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './timer.css';

const Timer = ({ timerCount, decrementCounter, restartState }) => {

  useEffect(() => {
    const counter = setInterval(() => {
      decrementCounter();
    }, 1000);

    return () => clearInterval(counter);
  }, []);

  if(timerCount === 0) {
    restartState();
  }

  return (
    <h1 className={styles.Timer}>{timerCount}</h1>
  );
};

Timer.propTypes = {
  timerCount: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  restartState: PropTypes.func.isRequired
};

export default Timer;
