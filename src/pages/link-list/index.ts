import * as React from 'react';

export const LazyLinkListPage = React.lazy(() => import(
  /* webpackChunkName: 'page_link-list', webpackPrefetch: true */
  './page'
));
