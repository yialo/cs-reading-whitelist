import { Subject } from '@/entities/subject';
import { cn } from '@/shared/lib/cn';
import { MainButton } from '@/shared/ui/button';

import { SubjectsFallbackMessage } from './fallback-message';
import { isSeries, SeriesSubjectsItem, SingleSubjectsItem } from './item';
import style from './style.scss';

export const Subjects: React.FC<{
  className?: string;
  list: Subject[];
  hasFetchError: boolean;
  isLastPage: boolean;
  onShowMoreClick: () => void;
}> = ({ className, list, hasFetchError, isLastPage, onShowMoreClick }) => {
  if (hasFetchError) {
    return <SubjectsFallbackMessage message="Ошибка загрузки" />;
  }

  if (!list.length) {
    return <SubjectsFallbackMessage message="Ничего не найдено" />;
  }

  return (
    <div className={cn(style.root, className)}>
      <ul className={style.list}>
        {list.map((subject) => {
          if (isSeries(subject)) {
            return (
              <SeriesSubjectsItem key={subject.caption} subject={subject} />
            );
          }

          return <SingleSubjectsItem key={subject.caption} subject={subject} />;
        })}
      </ul>

      {!isLastPage && (
        <MainButton className={style.button} onClick={onShowMoreClick}>
          Показать ещё
        </MainButton>
      )}
    </div>
  );
};
