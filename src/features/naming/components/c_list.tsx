import * as React from 'react';

import { CONTENTS } from '../data';

export const NamingPageList: React.FC = () => (
  <>
    {CONTENTS.map((it, i) => (
      <React.Fragment key={i}>
        <section id={it.id}>
          <h2>{it.title}</h2>

          {it.items.map((subIt, j) => (
            <React.Fragment key={j}>
              <h3>{subIt.title}</h3>

              <pre>
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

        {i !== CONTENTS.length - 1 && <hr />}
      </React.Fragment>
    ))}
  </>
);

NamingPageList.displayName = 'Naming-List';
