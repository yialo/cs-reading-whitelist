import * as React from 'react';

import { REFERENCE_LINKS } from './data';

import commonStyle from '@/scss/scaffold.scss';

export const ReferenceLinks: React.FC = () => {
  return (
    <div>
      <p>Создано на основе личного опыта и подборок из этих статей:</p>

      <ul>
        {REFERENCE_LINKS.map(([label, url], i) => (
          <li key={i}>
            <a className={commonStyle.link} href={url}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
