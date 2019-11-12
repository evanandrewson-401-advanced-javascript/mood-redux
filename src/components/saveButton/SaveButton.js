import React from 'react';
import PropTypes from 'prop-types';

const SaveButton = ({ save }) => {
  return <button onClick={save}>Save</button>;
};

SaveButton.PropTypes = {
  save: PropTypes.func.isRequired
};

export default SaveButton;