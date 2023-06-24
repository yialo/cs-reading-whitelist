import style from './style.scss';

interface Props {
  message: string;
}

export const SubjectsFallbackMessage: React.FC<Props> = ({ message }) => {
  return <p className={style.fallbackMessage}>{message}</p>;
};

SubjectsFallbackMessage.displayName = 'Subjects-FallbackMessage';
