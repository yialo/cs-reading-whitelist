import React from 'react';

interface IProps {
  message: string;
}

const FallbackMessage: React.FC<IProps> = ({ message }) => {
  return (
    <p className="subjects__fallback-message">{message}</p>
  );
};

export default FallbackMessage;
