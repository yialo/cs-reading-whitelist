import style from './style.scss';

export const SubjectsFallbackMessage: React.FC<{
  message: string;
}> = ({ message }) => {
  return <p className={style.fallbackMessage}>{message}</p>;
};

SubjectsFallbackMessage.displayName = 'Subjects-FallbackMessage';
