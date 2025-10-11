import * as React from 'react';

export const ReactActivity: React.FC<{
  children: React.ReactNode;
  visible: boolean;
}> = ({ children, visible }) => {
  return (
    <React.Activity mode={visible ? 'visible' : 'hidden'}>
      {children}
    </React.Activity>
  );
};
