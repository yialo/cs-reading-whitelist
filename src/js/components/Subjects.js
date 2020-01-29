import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button.js';
import Subject from './Subject.js';

function Subjects(props) {
  return (
    <div className="subjects page-content__subjects">
      <ul className="s_list subjects__list">
        {props.list.map((item, i) => (
          <Subject
            key={`${item.lang}-${i + 1}`}
            {...item}
          />
        ))}
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

Subjects.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.objectOf(
          PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.string,
          ])
      )
  )
    .isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Subjects;
