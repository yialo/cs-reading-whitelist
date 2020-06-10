import React from 'react';

export default function Preloader(): React.ReactNode {
  return (
    <div className="subjects__preloader" role="status">
      <span className="spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
}
