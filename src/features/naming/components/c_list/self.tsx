import * as React from 'react';
import { useSelector } from 'react-redux';

import { selectContent } from '../../ducks/selectors';

import style from './self.scss';

export const NamingList: React.FC = () => {
  const content = useSelector(selectContent);

  return (
    <>
      {content.map((it, i) => (
        <React.Fragment key={i}>
          <section id={it.id}>
            <h2 className={style.heading}>{it.title}</h2>

            {it.items.map((subIt, j) => (
              <React.Fragment key={j}>
                <h3 className={style.heading}>{subIt.title}</h3>

                <pre className={style.preformatted}>
                  {subIt.names.map((name, k) => (
                    <React.Fragment key={k}>
                      <code>{name}</code>
                      {k !== subIt.names.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </pre>
              </React.Fragment>
            ))}
          </section>

          {i !== content.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </>
  );
};

NamingList.displayName = 'Naming-List';
