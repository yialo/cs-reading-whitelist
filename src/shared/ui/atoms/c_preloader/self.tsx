import cn from 'clsx';
import type { WithClassName } from '@/shared/ui';
import style from './style.scss';

export const Preloader: React.FC<WithClassName> = ({ className }) => {
  return (
    <div className={cn(style.root, className)} role="status">
      <span className="Spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
};
