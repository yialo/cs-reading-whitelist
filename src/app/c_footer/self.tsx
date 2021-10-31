import React from 'react';

import style from './style.scss';

type TAppFooterLink = {
  legend: string;
  url: string;
};

const FOOTER_LINKS: TAppFooterLink[] = [
  {
    legend: 'GitHub',
    url: 'https://github.com/yialo/cs-reading-whitelist',
  },
  {
    legend: 'Twitter',
    url: 'https://twitter.com/xarroalex',
  },
  {
    legend: 'CodeSandbox',
    url: 'https://codesandbox.io/u/yialo/sandboxes',
  },
  {
    legend: 'CodePen',
    url: 'https://codepen.io/yialo/pens/public?grid_type=list',
  },
];

export const RootFooter: React.FC = () => {
  return (
    <footer className={style.root}>
      <ul className={style.list}>
        {FOOTER_LINKS.map(({ legend, url }, i) => (
          <li key={i}>
            <a className={style.link} href={url}>{legend}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
