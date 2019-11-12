import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResetButton.css';

const ResetButton = ({ reset }) => {
  return (
    <section className={styles.ResetButton}>
      <button onClick={reset}>Reset</button>
    </section>
  );
};

ResetButton.propTypes = {
  reset: PropTypes.func.isRequired
};

export default ResetButton;
