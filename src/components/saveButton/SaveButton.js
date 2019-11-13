import React from 'react';
import PropTypes from 'prop-types';
import styles from './SaveButton.css';

const SaveButton = ({ save }) => {
  return (
    <section className={styles.SaveButton}>
      <button onClick={save}>Save</button>
    </section>
  );
};

SaveButton.propTypes = {
  save: PropTypes.func.isRequired
};

export default SaveButton;
