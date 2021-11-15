import * as React from 'react';
import cn from 'clsx';

import { ButtonBase } from '@/components/c_button-base';
import { TClassNameable } from '@/types';

import { TSubject } from '../../types';
import { renderSubjectsItem } from '../c_subjects-item';
import { SubjectsFallbackMessage } from './c_fallback-message';

import style from './style.scss';

type TProps = TClassNameable & {
  list: TSubject[];
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
    <div className={cn(style.root, className)}>
      <ul className={style.list}>
        {list.map((subject, i, arr) => renderSubjectsItem({
          className: style[i === arr.length - 1 ? 'item_last' : 'item'],
          subject,
        }))}
      </ul>
      {!isLastPage && (
        <ButtonBase className={style.button} onClick={onShowMoreClick}>
          Показать ещё
        </ButtonBase>
      )}
    </div>
  );
};
