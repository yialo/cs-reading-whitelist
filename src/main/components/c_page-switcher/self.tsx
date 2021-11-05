import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Preloader } from '@/components/c_preloader';
import { ROUTES } from '@/constants';

import { Error404Page } from '../c_error-404-page';
import { LazyLinkListPage, LazyNamingPage } from './lazy';

export const PageSwitcher: React.FC = () => {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<LazyLinkListPage />} />
        <Route path={ROUTES.NAMING} element={<LazyNamingPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </React.Suspense>
  );
};
