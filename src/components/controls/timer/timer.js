import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ count, dispatch }) => {

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: 'DECREMENT_COUNTER' });
    }, 1000);

    // return clearInterval(counter);
  }, []);
  return (
    <h1>{count}</h1>
  );
};

Timer.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Timer;
