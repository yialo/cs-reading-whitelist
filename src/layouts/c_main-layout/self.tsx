import * as React from 'react';

import style from './self.scss';

export const MainLayout: React.FC = ({ children }) => {
  return <main className={style.root}>{children}</main>;
};
