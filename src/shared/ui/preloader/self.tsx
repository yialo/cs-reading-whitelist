import { cn } from '@/shared/lib/cn';

import style from './style.scss';

export const Preloader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(style.root, className)} role="status">
      <span className="Spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
};
