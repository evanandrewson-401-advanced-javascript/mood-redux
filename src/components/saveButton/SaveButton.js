import React from 'react';
import PropTypes from 'prop-types';

const SaveButton = ({ save }) => {
  return <button onClick={save}>Save</button>;
};

SaveButton.propTypes = {
  save: PropTypes.func.isRequired
};

export default SaveButton;
