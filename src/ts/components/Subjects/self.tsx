import React from 'react';
import classNames from 'classnames';

import { Button } from 'ts/components/Button';
import { ISubject } from 'ts/types';

import { SubjectsItem } from './Item';
import { SubjectsFallbackMessage as FallbackMessage } from './FallbackMessage';

import style from './style.scss';

interface IProps {
  className?: string;
  list: ISubject[];
  hasFetchError: boolean;
  onShowMoreClick: () => void;
}

export const Subjects: React.FC<IProps> = ({
  className,
  list,
  hasFetchError,
  onShowMoreClick,
}) => {
  if (hasFetchError) {
    return <FallbackMessage message="Ошибка загрузки" />;
  }

  if (!list.length) {
    return <FallbackMessage message="Ничего не найдено" />;
  }

  return (
    <div className={classNames(style.root, className)}>
      <ul className={style.list}>
        {list.map((subject) => (
          <SubjectsItem
            key={subject.url}
            caption={subject.caption}
            lang={subject.lang}
            legend={subject.legend}
            tags={subject.tags}
            url={subject.url}
          />
        ))}
      </ul>
      <Button className={style.button} onClick={onShowMoreClick}>
        Показать ещё
      </Button>
    </div>
  );
};

Subjects.defaultProps = {
  className: '',
};
