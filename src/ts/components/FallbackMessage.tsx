import React from 'react';

interface IProps {
  message: string;
}

export default function FallbackMessage({ message }: IProps): React.ReactNode {
  return (
    <p className="subjects__fallback-message">{message}</p>
  );
}
