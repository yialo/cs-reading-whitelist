import React from 'react';

import { REFERENCE_LINKS } from './data';

import style from '../style.scss';

export const ReferenceLinks: React.FC = () => {
  return (
    <div>
      <p>Создано на основе личного опыта и следующих подборок:</p>

      <ul>
        {REFERENCE_LINKS.map(([label, url], i) => (
          <li key={i}>
            <a className={style.link} href={url}>{label}</a>
          </li>
        ))}
      </ul>

      <p>Автор выражает благодарность создателям указанных страниц.</p>
    </div>
  );
};
