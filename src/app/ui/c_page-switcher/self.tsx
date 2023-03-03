import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Preloader } from '@/shared/ui';
import { ROUTE } from '@/enums';
import { LazyLinkListPage } from '@/pages/link-list';

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
