import React from 'react';

import type { SubjectCaption, SubjectLang, SubjectUrl } from 'ts/types';

import style from './style.scss';

interface ISubjectsSingleItemProps {
  caption: SubjectCaption;
  lang: SubjectLang;
  url: SubjectUrl;
}

export const SubjectsSingleItem: React.FC<ISubjectsSingleItemProps> = ({ caption, lang, url }) => (
  <a className={style.link} href={url} lang={lang}>{caption}</a>
);
