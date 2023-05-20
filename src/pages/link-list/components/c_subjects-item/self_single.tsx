import * as React from 'react';

import type { TClassNameable } from '@/types/common';

import type { SingleSublect } from '@/entities/subject';
import { SubjectsItemAppendix } from './c_appendix';
import { SubjectsItemLink } from './c_link';

type TProps = TClassNameable & {
  subject: SingleSublect;
};

export const SingleSubjectsItem: React.FC<TProps> = ({
  className,
  subject,
}) => {
  const { caption, lang, legend, tags, url } = subject;

  return (
    <li className={className}>
      <SubjectsItemLink {...{ caption, lang, url }} />
      <SubjectsItemAppendix {...{ lang, legend, tags }} />
    </li>
  );
};

SingleSubjectsItem.displayName = 'SubjectsItem_single';
