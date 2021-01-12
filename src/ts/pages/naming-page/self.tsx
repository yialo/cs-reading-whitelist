import React from 'react';

import { Contents } from './c_contents';
import { List } from './c_list';
import { ReferenceLinks } from './c_rerefence-links';

import style from './style.scss';

export const NamingPage: React.FC = () => {
  return (
    <main className={style.root}>
      <h1 className={style.headline}>Типовые названия UI-компонентов</h1>
      <hr />
      <ReferenceLinks />
      <hr />
      <Contents />
      <hr />
      <List />
    </main>
  );
};
