import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button.jsx';

function Subjects(props) {
  return (
    <div className="subjects page-content__subjects">
      <ul className="s_list subjects__list">
        {props.children}
      </ul>
      <Button
        classNames={['subjects__button']}
        type="submit"
        legend="Загрузить ещё"
        onClick={props.onButtonClick}
      />
    </div>
  );
}

Subjects.defaultProps = {
  children: '',
};

Subjects.propTypes = {
  children: PropTypes.node,
  onButtonClick: PropTypes.func.isRequired,
};

export default Subjects;
