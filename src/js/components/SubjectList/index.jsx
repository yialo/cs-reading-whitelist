import PropTypes from 'prop-types';
import React from 'react';

import FallbackMessage from '../FallbackMessage/index.jsx';
import Subject from '../Subject/index.jsx';

function SubjectList(props) {
  const { list } = props;
  if (list.length > 0) {
    return (
      <ul className="s_list subjects__list">
        {list.map((subject) => (
          <Subject
            key={subject.url}
            caption={subject.caption}
            lang={subject.lang}
            legend={subject.legend}
            tags={subject.tags}
            url={subject.url}
          />
        ))}
      </ul>
    );
  }
  return <FallbackMessage message="Ничего не найдено" />;
}

SubjectList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SubjectList;
