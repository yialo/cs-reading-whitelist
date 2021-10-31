import * as React from 'react';
import cn from 'clsx';

import { TClassNameable } from '@/types';

import style from './self.scss';

export const MainLayout: React.FC<TClassNameable> = ({ children, className }) => {
  return <main className={cn(style.root, className)}>{children}</main>;
};
