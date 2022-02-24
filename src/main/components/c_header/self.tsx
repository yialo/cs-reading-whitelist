import * as React from 'react';
import cn from 'clsx';
import debounce from 'lodash/debounce';
import { createPortal } from 'react-dom';

import { Button } from '@/components/c_button';
import { useHasDarkTheme } from '@/components/theme';
import type { TClassNameable } from '@/types/common';

import { AppNavMenu } from '../c_nav-menu';
import { ThemeToggle } from '../c_theme-toggle';

import style from './self.scss';

const SCROLL_THRESHOLD = 100;
const SCROLL_DEBOUNCE_DELAY = 25;

const $pageRoot = document.querySelector('.Page-Root');
const $goTopButtonContainer = document.getElementById('go-top-button');

export const RootHeader: React.FC<TClassNameable> = ({ className }) => {
  const [isScrolledEnough, setIsScrolledEnough] = React.useState(false);

  const hasDarkTheme = useHasDarkTheme();

  React.useEffect(() => {
    if (!$pageRoot) {
      return;
    }

    const handleScroll = debounce((event: Event) => {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }

      const shouldBeTranslucent = event.target.scrollTop > SCROLL_THRESHOLD;
      setIsScrolledEnough(shouldBeTranslucent);
    }, SCROLL_DEBOUNCE_DELAY);

    $pageRoot.addEventListener('scroll', handleScroll);

    return () => {
      $pageRoot.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderGoTopButton = () => {
    if (!$goTopButtonContainer) {
      return null;
    }

    const button = (
      <div className={style.goTopButton}>
        <Button
          aria-label="Вернуться наверх"
          className={cn(style.goTopButton__inner, {
            [style.goTopButton__inner_theme_dark!]: hasDarkTheme,
            [style.goTopButton__inner_visible!]: isScrolledEnough,
          })}
          disabled={!isScrolledEnough}
          onClick={() => {
            $pageRoot?.scrollTo({ top: 0 });
          }}
        />
      </div>
    );

    return createPortal(button, $goTopButtonContainer);
  };

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
      {renderGoTopButton()}
    </header>
  );
};
