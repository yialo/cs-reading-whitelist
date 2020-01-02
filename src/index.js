import '@csstools/normalize.css';
import '#css/index.css';

import showMessage from '#components/testing.js';
import greet from './js/simple.js';

const init = async () => {
  showMessage();
  greet();
};

init().catch((err) => {
  console.log(err.message);
});
