import * as React from 'react';

export const LazyGlucoseCalcPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: 'page_gcalc', webpackPrefetch: true */
      './ui'
    ),
);
