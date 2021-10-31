import * as React from 'react';

import { MainLayout } from '@/layouts/c_main-layout';

import { NamingPageContents } from '../components/c_contents';
import { NamingPageList } from '../components/c_list';
import { ReferenceLinks } from '../components/c_reference-links';

import style from './self.scss';

export const Naming: React.FC = () => {
  return (
    <MainLayout className={style.root}>
      <h1 className={style.headline}>Типовые названия UI-компонентов</h1>

      <hr />
      <ReferenceLinks />

      <hr />
      <NamingPageContents />

      <hr />
      <NamingPageList />
    </MainLayout>
  );
};
