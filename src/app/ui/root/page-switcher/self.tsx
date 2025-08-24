import * as React from 'react';
import { Route, Routes } from 'react-router';

import { Error404Page } from '@/pages/error-404';
import { LazyLinkListPage } from '@/pages/link-list';
import { LazyStringerPage } from '@/pages/stringer';
import { APP_ROUTE } from '@/shared/routing';
import { Preloader } from '@/shared/ui/preloader';

export const PageSwitcher: React.FC = () => {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Routes>
        <Route path={APP_ROUTE.HOME} element={<LazyLinkListPage />} />
        <Route path={APP_ROUTE.STRINGER} element={<LazyStringerPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </React.Suspense>
  );
};
