import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Preloader } from '@/components/c_preloader';
import { ROUTE } from '@/enums';

import { Error404Page } from '../c_error-404-page';
import { LazyLinkListPage, LazyNamingPage } from './lazy';

export const PageSwitcher: React.FC = () => {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Routes>
        <Route path={ROUTE.HOME} element={<LazyLinkListPage />} />
        <Route path={ROUTE.NAMING} element={<LazyNamingPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </React.Suspense>
  );
};
