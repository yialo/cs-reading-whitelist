import React from 'react';

import { ISubject } from '../types.ts';
import FallbackMessage from './FallbackMessage.tsx';
import Subject from './Subject.tsx';

interface IProps {
  list: ISubject[];
}

export default function SubjectList({ list }: IProps): React.ReactNode {
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
}
