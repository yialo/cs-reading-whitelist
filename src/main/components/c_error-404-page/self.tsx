import * as React from 'react';
// import cn from 'clsx';

import { MainLayout } from '@/layouts/c_main-layout';

import style from './self.scss';

export const Error404Page = () => {
  return (
    <MainLayout>
      <h1 className={style.heading}>Error 404</h1>
      <p className={style.details}>Page not found</p>
    </MainLayout>
  );
};
