import * as React from 'react';
import cn from 'clsx';

import { MainButton } from '@/shared/ui';
import type { TClassNameable } from '@/types/common';
import type { Subject } from '@/entities/subject';

import { renderSubjectsItem } from '../c_subjects-item';
import { SubjectsFallbackMessage } from './c_fallback-message';

import style from './style.scss';

interface Props extends TClassNameable {
  list: Subject[];
  hasFetchError: boolean;
  isLastPage: boolean;
  onShowMoreClick: () => void;
}

export const Subjects: React.FC<Props> = ({
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
        {list.map((subject, i, arr) =>
          renderSubjectsItem({
            className: style[i === arr.length - 1 ? 'item_last' : 'item'],
            subject,
          }),
        )}
      </ul>
      {!isLastPage && (
        <MainButton className={style.button} onClick={onShowMoreClick}>
          Показать ещё
        </MainButton>
      )}
    </div>
  );
};
