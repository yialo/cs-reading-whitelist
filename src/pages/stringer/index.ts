import * as React from 'react';

export const LazyStringerPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: 'page_stringer', webpackPrefetch: true */
      './ui'
    ),
);
