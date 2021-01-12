import React, { Fragment } from 'react';

import { CONTENTS } from './data';

export const NamingPageList: React.FC = () => (
  <>
    {CONTENTS.map((it, i) => (
      <Fragment key={i}>
        <section id={it.id} >
          <h2>{it.title}</h2>

          {it.items.map((subIt, j) => (
            <Fragment key={j}>
              <h3>{subIt.title}</h3>

              <pre>
                {subIt.names.map((name, k) => (
                  <Fragment key={k}>
                    <code>{name}</code>
                    {k !== subIt.names.length - 1 && ', '}
                  </Fragment>
                ))}
              </pre>
            </Fragment>
          ))}
        </section>

        {i !== CONTENTS.length - 1 && <hr />}
      </Fragment>
    ))}
  </>
);

NamingPageList.displayName = 'NamingPage-List';
