import * as React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@/components/c_button';

import { selectContentHeaders } from '../ducks/selectors';

import commonStyle from '@/scss/scaffold.scss';
import utilStyle from '../utils.scss';

export const NamingContents: React.FC = () => {
  const headers = useSelector(selectContentHeaders);

  return (
    <section>
      <h2>Содержание</h2>

      <ul className={utilStyle.list}>
        {headers.map(({ id, title }) => (
          <li key={id}>
            <Button
              className={commonStyle.link}
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
