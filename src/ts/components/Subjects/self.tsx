import React from 'react';
import classNames from 'classnames';

import { MainButton } from 'ts/components/Button';
import { ISubject } from 'ts/types';

import { renderSubjectsItem } from './Item';
import { SubjectsFallbackMessage as FallbackMessage } from './FallbackMessage';

import style from './style.scss';

interface IProps {
  className?: string;
  list: ISubject[];
  hasFetchError: boolean;
  isLastPage: boolean;
  onShowMoreClick: () => void;
}

export const Subjects: React.FC<IProps> = ({
  className,
  list,
  hasFetchError,
  isLastPage,
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
        {list.map((subject) => renderSubjectsItem(subject))}
      </ul>
      {!isLastPage && (
        <MainButton className={style.button} onClick={onShowMoreClick}>
          Показать ещё
        </MainButton>
      )}
    </div>
  );
};

Subjects.defaultProps = {
  className: '',
};
