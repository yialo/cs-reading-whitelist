import React from 'react';

import { NamingPageContents } from './c_contents';
import { NamingPageList } from './c_list';
import { ReferenceLinks } from './c_rerefence-links';

import style from './style.scss';

export const NamingPage: React.FC = () => {
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
