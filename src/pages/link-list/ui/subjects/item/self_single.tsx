import type { SingleSublect } from '@/entities/subject';
import type { WithClassName } from '@/shared/ui';
import { SubjectsItemAppendix } from './appendix';
import { SubjectsItemLink } from './link';

interface Props extends WithClassName {
  subject: SingleSublect;
}

export const SingleSubjectsItem: React.FC<Props> = ({ className, subject }) => {
  const { caption, lang, legend, tags, url } = subject;

  return (
    <li className={className}>
      <SubjectsItemLink {...{ caption, lang, url }} />
      <SubjectsItemAppendix {...{ lang, legend, tags }} />
    </li>
  );
};

SingleSubjectsItem.displayName = 'SubjectsItem_single';
