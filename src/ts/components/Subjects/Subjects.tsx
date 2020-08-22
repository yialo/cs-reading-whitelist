import React from 'react';
import classNames from 'classnames';

import { ISubject } from 'ts/types';

import { SubjectsItem } from './Item';
import { SubjectsFallbackMessage } from './SubjectsFallbackMessage';

import style from './style.scss';

interface IProps {
  className?: string;
  list: ISubject[];
  hasFetchError: boolean;
}

export const Subjects: React.FC<IProps> = ({
  className,
  list,
  hasFetchError,
}) => {
  if (hasFetchError) {
    return <SubjectsFallbackMessage message="Ошибка загрузки" />;
  }

  if (!list.length) {
    return <SubjectsFallbackMessage message="Ничего не найдено" />;
  }

  return (
    <div className={classNames(style.root, className)}>
      <ul className={style.list}>
        {list.map((subject, i, arr) => (
          <SubjectsItem
            key={subject.url}
            caption={subject.caption}
            className={style[i === arr.length - 1 ? 'item_last' : 'item']}
            lang={subject.lang}
            legend={subject.legend}
            tags={subject.tags}
            url={subject.url}
          />
        ))}
      </ul>
    </div>
  );
};

Subjects.defaultProps = {
  className: '',
};
