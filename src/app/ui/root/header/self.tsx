import * as React from 'react';
import { debounce } from 'lodash-es';
import { createPortal } from 'react-dom';

import { ThemeToggle } from '@/features/toggle-theme';
import { DOM_ID } from '@/shared/config';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { useHasDarkTheme } from '@/shared/ui/theme';
import { WithClassName } from '@/shared/ui/types';

import { AppNavMenu } from './nav-menu';
import style from './self.scss';

const SCROLL_TOP_THRESHOLD = 100;
const SCROLL_DEBOUNCE_DELAY = 25;

const GO_TOP_BUTTON_SHIFT = {
  NORMAL: 40,
  STICKY: 60,
};

const getAppRoot = () => document.querySelector(DOM_ID.APP_ROOT);

export const RootHeader: React.FC<WithClassName> = ({ className }) => {
  const [isScrolledEnough, setIsScrolledEnough] = React.useState(false);
  const [goTopButtonBottomShift, setgoTopButtonBottomShift] = React.useState(
    GO_TOP_BUTTON_SHIFT.NORMAL,
  );

  const hasDarkTheme = useHasDarkTheme();

  const goTopButtonContainerRef = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    const container = goTopButtonContainerRef.current;
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  React.useEffect(() => {
    const appRoot = getAppRoot();

    if (!(appRoot instanceof HTMLDivElement)) {
      return;
    }

    const handleScroll = debounce(() => {
      const shouldBeTranslucent = appRoot.scrollTop > SCROLL_TOP_THRESHOLD;
      setIsScrolledEnough(shouldBeTranslucent);

      const shouldGoTopButtonBeSticky =
        appRoot.scrollHeight - (appRoot.scrollTop + appRoot.offsetHeight) <
        GO_TOP_BUTTON_SHIFT.STICKY;

      setgoTopButtonBottomShift(
        shouldGoTopButtonBeSticky
          ? GO_TOP_BUTTON_SHIFT.STICKY
          : GO_TOP_BUTTON_SHIFT.NORMAL,
      );
    }, SCROLL_DEBOUNCE_DELAY);

    appRoot.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      appRoot.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderGoTopButton = () => {
    const goTopButton = (
      <div
        className={style.goTopButton}
        style={{ paddingBlockEnd: goTopButtonBottomShift }}
      >
        <Button
          aria-label="Вернуться наверх"
          className={cn(style.goTopButton__inner, {
            [style.goTopButton__inner_theme_dark!]: hasDarkTheme,
            [style.goTopButton__inner_visible!]: isScrolledEnough,
          })}
          disabled={!isScrolledEnough}
          onClick={() => {
            getAppRoot()?.scrollTo({ top: 0 });
          }}
        />
      </div>
    );

    return createPortal(goTopButton, goTopButtonContainerRef.current);
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
