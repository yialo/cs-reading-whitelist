import * as React from 'react';
import cn from 'clsx';
import type { TClassNameable } from '@/types/common';
import style from './style.scss';

export const Preloader: React.FC<TClassNameable> = ({ className }) => {
  return (
    <div className={cn(style.root, className)} role="status">
      <span className="Spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
};
