import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Preloader } from '@/components/c_preloader';
import { ROUTES } from '@/constants';

import { LazyLinkListPage, LazyNamingPage } from './lazy';

export const PageSwitcher: React.FC = () => {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<LazyLinkListPage />} />
        <Route path={ROUTES.NAMING} element={<LazyNamingPage />} />
        <Route path="*" element={<div>404 Page not found</div>} />
      </Routes>
    </React.Suspense>
  );
};
