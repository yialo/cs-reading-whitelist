import * as React from 'react';
import style from './style.scss';

type TProps = {
  caption: string;
  lang: string;
  url: string;
};

export const SubjectsItemLink: React.FC<TProps> = ({ caption, lang, url }) => {
  return (
    <a className={style.link} href={url} hrefLang={lang} lang={lang}>
      {caption}
    </a>
  );
};

SubjectsItemLink.displayName = 'SubjectsItem-Link';
