import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './timer.css';

const Timer = ({ count, decrementCounter, restartState }) => {

  useEffect(() => {
    const counter = setInterval(() => {
      decrementCounter();
    }, 1000);

    return () => clearInterval(counter);
  }, []);

  if(count === 0) {
    restartState();
  }

  return (
    <h1 className={styles.Timer}>{count}</h1>
  );
};

Timer.propTypes = {
  count: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  restartState: PropTypes.func.isRequired
};

export default Timer;
