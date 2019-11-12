import React from 'react';
import PropTypes from 'prop-types';

const SavedGame = ({ face, coffees, snacks, naps, studies }) => {
  return (
    <section>
      <div>
        <p>Coffees: {coffees}</p>
        <p>Snacks: {snacks}</p>
        <p>Naps: {naps}</p>
        <p>Studies: {studies}</p>
      </div>
      <p>{face}</p>
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
