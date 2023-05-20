import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LazyLinkListPage } from '@/pages/link-list';
import { ROUTE } from '@/shared/config';
import { Preloader } from '@/shared/ui';
import { Error404Page } from '../c_error-404-page';

export const PageSwitcher: React.FC = () => {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Routes>
        <Route path={ROUTE.HOME} element={<LazyLinkListPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </React.Suspense>
  );
};
