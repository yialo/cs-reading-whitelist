import * as React from 'react';
import { useSelector } from 'react-redux';

import { selectContent } from '../../ducks/selectors';

import style from './self.scss';

export const NamingList: React.FC = () => {
  const content = useSelector(selectContent);

  return (
    <>
      {content.map((section, i) => (
        <React.Fragment key={i}>
          <section id={section.id}>
            <h2 className={style.heading}>{section.title}</h2>

            {section.items.map((sectionItem, j) => (
              <React.Fragment key={j}>
                <h3 className={style.heading}>{sectionItem.title}</h3>

                <pre className={style.preformatted}>
                  {sectionItem.names.map((name, k) => (
                    <React.Fragment key={k}>
                      <code>{name}</code>
                      {k !== sectionItem.names.length - 1 && ', '}
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
