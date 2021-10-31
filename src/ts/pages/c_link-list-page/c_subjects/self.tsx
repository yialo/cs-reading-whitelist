import React from 'react';
import classNames from 'classnames';

import { MainButton } from '@/ts/common/c_main-button';
import { TClassNameable, ISubject } from '@/ts/types';

import { renderSubjectsItem } from '../c_subjects-item';
import { SubjectsFallbackMessage } from './c_fallback-message';

import style from './style.scss';

type TProps = TClassNameable & {
  list: ISubject[];
  hasFetchError: boolean;
  isLastPage: boolean;
  onShowMoreClick: () => void;
};

export const Subjects: React.FC<TProps> = ({
  className,
  list,
  hasFetchError,
  isLastPage,
  onShowMoreClick,
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
        {list.map((subject, i, arr) => renderSubjectsItem({
          className: style[i === arr.length - 1 ? 'item_last' : 'item'],
          subject,
        }))}
      </ul>
      {!isLastPage && (
        <MainButton className={style.button} onClick={onShowMoreClick}>
          Показать ещё
        </MainButton>
      )}
    </div>
  );
};
