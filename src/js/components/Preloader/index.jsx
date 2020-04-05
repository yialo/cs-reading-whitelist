import React from 'react';

function Preloader() {
  return (
    <div className="subjects__preloader" role="status">
      <span className="spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
}

export default Preloader;
