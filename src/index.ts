import '@csstools/normalize.css';

// TODO: figure out cause of strange TS compiler behavior
import '@/css/index.css';
// import 'styles';

import './fonts/source-sans-pro_400_italic.woff2';
import './fonts/source-sans-pro_400_normal.woff2';
import './fonts/source-sans-pro_700_italic.woff2';
import './fonts/source-sans-pro_700_normal.woff2';

import initApp from './ts/initApp.tsx';

initApp();
