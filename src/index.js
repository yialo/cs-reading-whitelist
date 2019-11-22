import '@csstools/normalize.css';
import '@/css/index.css';

import listTemplate from '@/pug/mixins/test.pug';

const { body } = document;
const div = document.createElement('div');
div.innerHTML = listTemplate({ items: [1, 2, 3] });
body.appendChild(div);
