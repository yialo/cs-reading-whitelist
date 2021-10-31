import React from 'react';

import { SubjectCaption, SubjectLang, SubjectUrl } from '@/types';

import style from './style.scss';

type TProps = {
  caption: SubjectCaption;
  lang: SubjectLang;
  url: SubjectUrl;
};

export const SubjectsItemLink: React.FC<TProps> = ({
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

SubjectsItemLink.displayName = 'SubjectsItem-Link';
