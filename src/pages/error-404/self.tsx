import { MainLayout } from '@/shared/ui/main-layout';
import { getPageHeadTitle } from '@/shared/ui/page-head-title';

import styles from './self.scss';

export const Error404Page: React.FC = () => {
  return (
    <MainLayout>
      <title>{getPageHeadTitle('Page not found')}</title>
      <h1 className={styles.heading}>Error 404</h1>
      <p className={styles.details}>Page not found</p>
    </MainLayout>
  );
};
