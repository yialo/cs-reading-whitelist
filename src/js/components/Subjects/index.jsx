import PropTypes from 'prop-types';
import React from 'react';

function Subjects(props) {
  return (
    <div className="subjects page-content__subjects">
      {props.children}
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
