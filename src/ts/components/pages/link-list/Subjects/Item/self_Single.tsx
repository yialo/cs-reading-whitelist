import React from 'react';

import type { ISingleSublect } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';
import { SubjectsItemLink as Link } from './Link';
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
      <Link {...{ caption, lang, url }} />
      <Appendix {...{ lang, legend, tags }} />
    </li>
  );
};

SingleSubjectsItem.defaultProps = {
  className: '',
};

SingleSubjectsItem.displayName = 'SubjectsSingleItem';
