import React from 'react';
import PropTypes from 'prop-types';
import styles from './SavedGame.css';

const SavedGame = ({ face, coffees, snacks, naps, studies }) => {
  return (
    <section className={styles.SavedGame}>
      <div>
        <p>Coffees: {coffees}</p>
        <p>Snacks: {snacks}</p>
        <p>Naps: {naps}</p>
        <p>Studies: {studies}</p>
      </div>
      <p className={styles.face}>{face}</p>
    </section>
  );
};

SavedGame.propTypes = {
  face: PropTypes.string.isRequired,
  coffees: PropTypes.number.isRequired,
  snacks: PropTypes.number.isRequired,
  naps: PropTypes.number.isRequired,
  studies: PropTypes.number.isRequired
};

export default SavedGame;
