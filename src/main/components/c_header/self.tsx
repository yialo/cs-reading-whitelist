import * as React from 'react';
import cn from 'clsx';
import debounce from 'lodash/debounce';

import { Button } from '@/components/c_button';
import { Portal } from '@/components/c_portal';
import type { TClassNameable } from '@/types/common';

import { AppNavMenu } from '../c_nav-menu';
import { ThemeToggle } from '../c_theme-toggle';

import style from './self.scss';

const SCROLL_THRESHOLD = 100;
const SCROLL_DEBOUNCE_DELAY = 25;

export const RootHeader: React.FC<TClassNameable> = ({ className }) => {
  const [isScrolledEnough, setIsScrolledEnough] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = debounce((event: Event) => {
      if (!(event.target instanceof HTMLBodyElement)) {
        return;
      }

      const shouldBeTranslucent = event.target.scrollTop > SCROLL_THRESHOLD;
      setIsScrolledEnough(shouldBeTranslucent);
    }, SCROLL_DEBOUNCE_DELAY);

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        style.root,
        {
          [style.root_translucent!]: isScrolledEnough,
        },
        className,
      )}
    >
      <AppNavMenu />
      <ThemeToggle className={style.themeToggle} />

      <Portal>
        <Button
          aria-label="Вернуться наверх"
          className={cn(style.goTopButton, {
            [style.goTopButton_visible!]: isScrolledEnough,
          })}
          onClick={() => {
            document.body.scrollTo({ top: 0 });
          }}
        />
      </Portal>
    </header>
  );
};
