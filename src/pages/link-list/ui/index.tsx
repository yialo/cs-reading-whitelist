import { MainLayout } from '@/shared/ui/main-layout';
import { buildPageHeadTitle } from '@/shared/ui/page-head-title';

import { LinkList } from './self';

const LinkListPage: React.FC = () => (
  <MainLayout>
    <title>{buildPageHeadTitle("Yialo's Reading Whitelist")}</title>
    <LinkList />
  </MainLayout>
);

export default LinkListPage;
