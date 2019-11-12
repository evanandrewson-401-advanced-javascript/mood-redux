import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './timer.css';

const Timer = ({ count, dispatch }) => {

  useEffect(() => {
    const counter = setInterval(() => {
      dispatch({ type: 'DECREMENT_COUNTER' });
    }, 1000);

    return () => clearInterval(counter);
  }, []);

  if(count === 0) {
    dispatch({ type: 'RESTART_STATE' });
  }

  return (
    <h1 className={styles.Timer}>{count}</h1>
  );
};

Timer.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Timer;
