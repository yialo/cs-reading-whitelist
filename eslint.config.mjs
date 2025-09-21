import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import jsPlugin from '@eslint/js';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['*.html', '/dist/', '/extra/']),
  {
    name: 'tool-configs',
    files: ['./*.config.{c,m}js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedInlineConfigs: 'warn',
    },
    plugins: {
      js: jsPlugin,
    },
    extends: [jsPlugin.configs.recommended, prettierPluginRecommended],
    rules: {
      'no-unused-vars': ['warn'],
      'prefer-const': [
        'warn',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'prettier/prettier': 'warn',
    },
  },
]);
