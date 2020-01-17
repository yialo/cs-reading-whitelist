import React from 'react';

import Button from './Button.jsx';
import Subject from './Subject.jsx';

const Subjects = (props) => {
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
      />
    </div>
  );
};

export default Subjects;
