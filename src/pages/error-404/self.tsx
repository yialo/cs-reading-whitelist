import { MainLayout } from '@/shared/ui/main-layout';

import style from './self.scss';

export const Error404Page: React.FC = () => {
  return (
    <MainLayout>
      <h1 className={style.heading}>Error 404</h1>
      <p className={style.details}>Page not found</p>
    </MainLayout>
  );
};
