import type * as React from 'react';
import { createPortal } from 'react-dom';

const TARGET_ID = 'scroll-back-button';

const $container = document.getElementById(TARGET_ID);

type TProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: TProps) => {
  if (!$container) {
    return null;
  }

  return createPortal(
    children,
    $container,
  );
};
