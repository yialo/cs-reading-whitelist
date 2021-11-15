import * as React from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';

import { Button } from '@/components/c_button';

import { selectContentHeaders } from '../../ducks/selectors';

import commonStyle from '@/scss/scaffold.scss';
import utilStyle from '../../utils.scss';
import style from './self.scss';

export const NamingContents: React.FC = () => {
  const headers = useSelector(selectContentHeaders);

  return (
    <section>
      <h2>Содержание</h2>

      <ul className={utilStyle.list}>
        {headers.map(({ id, title }) => (
          <li key={id}>
            <Button
              className={cn(commonStyle.link, style.anchor)}
              role="link"
              onClick={() => {
                const $targetElement = document.getElementById(id);

                if ($targetElement) {
                  window.scrollTo({
                    top: $targetElement.offsetTop,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

NamingContents.displayName = 'Naming-Contents';
