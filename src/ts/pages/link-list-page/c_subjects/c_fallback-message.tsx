import React from 'react';

import style from './style.scss';

interface IProps {
  message: string;
}

export const SubjectsFallbackMessage: React.FC<IProps> = ({ message }) => {
  return (
    <p className={style.fallbackMessage}>{message}</p>
  );
};

SubjectsFallbackMessage.displayName = 'Subjects-FallbackMessage';
