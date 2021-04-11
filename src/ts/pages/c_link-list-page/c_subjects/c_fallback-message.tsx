import React from 'react';

import style from './style.scss';

type TProps = {
  message: string;
};

export const SubjectsFallbackMessage: React.FC<TProps> = ({ message }) => {
  return (
    <p className={style.fallbackMessage}>{message}</p>
  );
};

SubjectsFallbackMessage.displayName = 'Subjects-FallbackMessage';
