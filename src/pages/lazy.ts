import { lazy } from 'react';

export const LazyLinkListPage = lazy(() => import(
  /* webpackChunkName: 'page_link-list', webpackPrefetch: true */
  '@/features/link-list/page'
));

export const LazyNamingPage = lazy(() => import(
  /* webpackChunkName: 'page_naming', webpackPrefetch: true */
  '@/features/naming/page'
));
