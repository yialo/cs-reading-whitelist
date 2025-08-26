import { MainLayout } from '@/shared/ui/main-layout';
import { getPageHeadTitle } from '@/shared/ui/page-head-title';

import { LinkList } from './self';

const LinkListPage: React.FC = () => (
  <MainLayout>
    <title>{getPageHeadTitle("Yialo's Reading Whitelist")}</title>
    <LinkList />
  </MainLayout>
);

export default LinkListPage;
