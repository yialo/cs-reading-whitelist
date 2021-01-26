import React from 'react';

import type { ISingleSublect } from 'ts/types';

import { SubjectsItemAppendix } from './c_appendix';
import { SubjectsItemLink } from './c_link';
import type { IClassNameable } from './types';

interface ISingleSubjectsItemProps extends IClassNameable {
  subject: ISingleSublect;
}

export const SingleSubjectsItem: React.FC<ISingleSubjectsItemProps> = ({
  className,
  subject,
}) => {
  const {
    caption,
    lang,
    legend,
    tags,
    url,
  } = subject;

  return (
    <li className={className}>
      <SubjectsItemLink {...{ caption, lang, url }} />
      <SubjectsItemAppendix {...{ lang, legend, tags }} />
    </li>
  );
};

SingleSubjectsItem.displayName = 'SubjectsItem_single';
