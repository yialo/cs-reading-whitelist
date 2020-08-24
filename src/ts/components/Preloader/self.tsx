import React from 'react';

import style from './style.scss';

export const Preloader: React.FC = () => {
  return (
    <div className={style.preloader} role="status">
      <span className="spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
};
