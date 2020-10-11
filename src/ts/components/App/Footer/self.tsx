import React from 'react';

import style from './style.scss';

interface AppFooterLink {
  legend: string;
  url: string;
}

const FOOTER_LINKS: AppFooterLink[] = [
  {
    legend: 'GitHub',
    url: 'https://github.com/yialo/cs-reading-whitelist',
  },
  {
    legend: 'Twitter',
    url: 'https://twitter.com/xarroalex',
  },
];

export const AppFooter: React.FC = () => {
  return (
    <footer className={style.root}>
      <ul className={style.list}>
        {FOOTER_LINKS.map(({ legend, url }, i) => (
          <li key={i}>
            <a href={url}>{legend}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
