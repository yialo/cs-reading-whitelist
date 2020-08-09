import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="subjects__preloader" role="status">
      <span className="spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
};

export default Preloader;
