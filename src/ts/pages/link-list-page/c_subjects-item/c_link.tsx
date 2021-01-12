import React from 'react';

import type { SubjectCaption, SubjectLang, SubjectUrl } from 'ts/types';

import style from './style.scss';

interface ISubjectsItemLinkProps {
  caption: SubjectCaption;
  lang: SubjectLang;
  url: SubjectUrl;
}

export const SubjectsItemLink: React.FC<ISubjectsItemLinkProps> = ({
  caption,
  lang,
  url,
}) => {
  return (
    <a
      className={style.link}
      href={url}
      hrefLang={lang}
      lang={lang}
    >
      {caption}
    </a>
  );
};
