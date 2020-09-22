import React from 'react';

import type { ISingleSublect } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';
import { SubjectsItemLink as Link } from './Link';

interface ISingleSubjectsItemProps {
  subject: ISingleSublect;
}

export const SingleSubjectsItem: React.FC<ISingleSubjectsItemProps> = ({ subject }) => {
  const {
    caption,
    lang,
    legend,
    tags,
    url,
  } = subject;

  return (
    <li>
      <Link {...{ caption, lang, url }} />
      <Appendix {...{ lang, legend, tags }} />
    </li>
  );
};

SingleSubjectsItem.displayName = 'single(SubjectsItem)';
