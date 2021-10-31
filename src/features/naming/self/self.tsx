import * as React from 'react';

import { NamingPageContents } from '../components/c_contents';
import { NamingPageList } from '../components/c_list';
import { ReferenceLinks } from '../components/c_reference-links';

import style from './style.scss';

export const Naming: React.FC = () => {
  return (
    <main className={style.root}>
      <h1 className={style.headline}>Типовые названия UI-компонентов</h1>

      <hr />
      <ReferenceLinks />

      <hr />
      <NamingPageContents />

      <hr />
      <NamingPageList />
    </main>
  );
};
