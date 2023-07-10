import * as React from 'react';
import cn from 'clsx';
import { debounce } from 'lodash-es';
import { createPortal } from 'react-dom';
import { ThemeToggle } from '@/features/toggle-theme';
import { Button, useHasDarkTheme } from '@/shared/ui';
import type { WithClassName } from '@/shared/ui';
import { AppNavMenu } from './nav-menu';
import style from './self.scss';

const SCROLL_TOP_THRESHOLD = 100;
const SCROLL_DEBOUNCE_DELAY = 25;

const GO_TOP_BUTTON_SHIFT = {
  NORMAL: 40,
  STICKY: 60,
};

const $pageRoot = document.querySelector('.Page-Root');

export const RootHeader: React.FC<WithClassName> = ({ className }) => {
  const [isScrolledEnough, setIsScrolledEnough] = React.useState(false);
  const [goTopButtonBottomShift, setgoTopButtonBottomShift] = React.useState(
    GO_TOP_BUTTON_SHIFT.NORMAL,
  );

  const hasDarkTheme = useHasDarkTheme();

  const ref_$goTopButtonContainer = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    const $container = ref_$goTopButtonContainer.current;

    document.body.appendChild($container);

    return () => {
      document.body.removeChild($container);
    };
  }, []);

  React.useEffect(() => {
    if (!($pageRoot instanceof HTMLDivElement)) {
      return;
    }

    const handleScroll = debounce(() => {
      const shouldBeTranslucent = $pageRoot.scrollTop > SCROLL_TOP_THRESHOLD;
      setIsScrolledEnough(shouldBeTranslucent);

      const shouldGoTopButtonBeSticky =
        $pageRoot.scrollHeight -
          ($pageRoot.scrollTop + $pageRoot.offsetHeight) <
        GO_TOP_BUTTON_SHIFT.STICKY;

      setgoTopButtonBottomShift(
        shouldGoTopButtonBeSticky
          ? GO_TOP_BUTTON_SHIFT.STICKY
          : GO_TOP_BUTTON_SHIFT.NORMAL,
      );
    }, SCROLL_DEBOUNCE_DELAY);

    $pageRoot.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      $pageRoot.removeEventListener('scroll', handleScroll);
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
            $pageRoot?.scrollTo({ top: 0 });
          }}
        />
      </div>
    );

    return createPortal(goTopButton, ref_$goTopButtonContainer.current);
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