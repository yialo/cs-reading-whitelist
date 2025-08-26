import * as React from 'react';
import { createPortal } from 'react-dom';

export const Portal: React.FC<{
  children: React.ReactNode;
  open: boolean;
  onMountChange?: (open: boolean) => void;
}> = ({ children, open, onMountChange }) => {
  const [portalContainer, setPortalContainer] =
    React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    const container = document.createElement('div');
    document.body.append(container);
    setPortalContainer(container);
    onMountChange?.(true);

    return () => {
      container.remove();
      setPortalContainer(null);
      onMountChange?.(false);
    };
  }, [open, setPortalContainer]);

  if (!open || !portalContainer) return null;

  return createPortal(children, portalContainer);
};
