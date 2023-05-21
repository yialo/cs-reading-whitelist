import * as React from 'react';
import style from './self.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <main className={style.root}>{children}</main>;
};
