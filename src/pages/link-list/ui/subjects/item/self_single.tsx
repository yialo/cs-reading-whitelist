import { SingleSublect } from '@/entities/subject';

import { SubjectsItemAppendix } from './appendix';
import { SubjectsItemLink } from './link';

export const SingleSubjectsItem: React.FC<{
  className?: string;
  subject: SingleSublect;
}> = ({ className, subject }) => {
  const { caption, lang, legend, tags, url } = subject;

  return (
    <li className={className}>
      <SubjectsItemLink {...{ caption, lang, url }} />
      <SubjectsItemAppendix {...{ lang, legend, tags }} />
    </li>
  );
};

SingleSubjectsItem.displayName = 'SubjectsItem_single';
