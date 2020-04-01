import PropTypes from 'prop-types';
import React from 'react';

function Subjects({ children }) {
  return (
    <div className="subjects page-content__subjects">
      {children}
    </div>
  );
}

Subjects.defaultProps = {
  children: '',
};

Subjects.propTypes = {
  children: PropTypes.node,
};

export default Subjects;
