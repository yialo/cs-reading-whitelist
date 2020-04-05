import PropTypes from 'prop-types';
import React from 'react';

function FallbackMessage(props) {
  return (
    <p className="subjects__fallback-message">{props.message}</p>
  );
}

FallbackMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FallbackMessage;
