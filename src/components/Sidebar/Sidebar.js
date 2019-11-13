import React from 'react';
import PropTypes from 'prop-types';
import SavedGame from '../SavedGame/SavedGame';
import styles from './Sidebar.css';

const Sidebar = ({ savedGames }) => {
  const elements = savedGames.map((game, index) => {
    return (
      <SavedGame key={index} {...game} />
    );
  });

  return (
    <aside className={styles.Sidebar}>
      {elements}
    </aside>
  );
};

Sidebar.propTypes = {
  savedGames: PropTypes.arrayOf(PropTypes.shape({
    face: PropTypes.string.isRequired,
    coffees: PropTypes.string.isRequired,
    snacks: PropTypes.string.isRequired,
    studies: PropTypes.string.isRequired,
  }))
};

export default Sidebar;
