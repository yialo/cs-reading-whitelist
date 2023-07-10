import cn from 'clsx';
import type { Subject } from '@/entities/subject';
import { MainButton } from '@/shared/ui';
import type { WithClassName } from '@/shared/ui';
import { SubjectsFallbackMessage } from './fallback-message';
import { renderSubjectsItem } from './item';
import style from './style.scss';

interface Props extends WithClassName {
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