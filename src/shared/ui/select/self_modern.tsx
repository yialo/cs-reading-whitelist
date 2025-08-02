import * as React from 'react';

import { KEYBOARD_KEY } from '@/shared/config';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { WithClassName } from '@/shared/ui/types';

import style from './self_modern.scss';

export const Select: React.FC<{
  className?: string;
  dict: Record<string, string>;
  tip: React.ReactNode;
  value: string;
  onChange: (newValue: string) => void;
}> = ({ className, dict, tip, value, onChange }) => {
  return (
    <div>
      <Button>{dict[value]}</Button>

      <div popover="auto"></div>
    </div>
  );
};
