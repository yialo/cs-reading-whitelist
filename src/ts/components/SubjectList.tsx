import React from 'react';

import { ISubject } from '../types.ts';
import FallbackMessage from './FallbackMessage.tsx';
import Subject from './Subject.tsx';

interface IProps {
  list: ISubject[];
}

const SubjectList: React.FC<IProps> = ({ list }) => {
  if (!list.length) {
    return <FallbackMessage message="Ничего не найдено" />;
  }

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
};

export default SubjectList;
