import React from 'react';

import type { ISingleSublect } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';
import { SubjectsItemLink as Link } from './Link';

interface ISubjectsItemOfSingleProps {
  subject: ISingleSublect;
}

export const SubjectsItemOfSingle: React.FC<ISubjectsItemOfSingleProps> = ({ subject }) => {
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

SubjectsItemOfSingle.displayName = 'SubjectsItem_single';
