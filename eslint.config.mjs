import jsPlugin from '@eslint/js';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import * as importXPlugin from 'eslint-plugin-import-x';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

const jsTsInteropRules = {
  'no-unused-vars': [
    'warn',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
};

const defineWithPrettierConfig = (configObject) => {
  if (!configObject.extends) configObject.extends = [];
  configObject.extends.push(prettierPluginRecommended);

  if (!configObject.rules) configObject.rules = {};
  configObject.rules['prettier/prettier'] = 'warn';

  return configObject;
};

export default defineConfig([
  globalIgnores(['dist/', 'extra/']),
  {
    name: 'shared',
    files: ['**/*.{cjs,mjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
    },
    extends: [
      jsPlugin.configs.recommended,
      importXPlugin.flatConfigs.recommended,
    ],
    plugins: {
      promise: promisePlugin,
    },
    rules: {
      'import-x/no-duplicates': [
        'warn',
        {
          considerQueryString: true,
        },
      ],
      'promise/no-nesting': 'error',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/no-return-wrap': 'error',
      'promise/valid-params': 'error',
      'prefer-const': [
        'warn',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  },
  defineWithPrettierConfig({
    name: 'tools/shared',
    files: ['*.config.{cjs,mjs}'],
    linterOptions: {
      reportUnusedInlineConfigs: 'warn',
    },
    rules: {
      'no-unused-vars': jsTsInteropRules['no-unused-vars'],
    },
  }),
  {
    name: 'tools/commonjs',
    files: ['*.config.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    name: 'tools/esm',
    files: ['*.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  },
  defineWithPrettierConfig({
    name: 'src',
    files: ['src/**/*.ts?(x)'],
    extends: [
      tsEslint.configs.recommendedTypeChecked,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      reactRefreshPlugin.configs.recommended,
      reactHooksPlugin.configs['recommended-latest'],
      jsxA11yPlugin.flatConfigs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': jsTsInteropRules['no-unused-vars'],
      'react/jsx-filename-extension': [
        'error',
        {
          allow: 'always',
          extensions: ['.tsx'],
          ignoreFilesWithoutCode: true,
        },
      ],
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/prop-types': 'off',
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver(),
        importXPlugin.createNodeResolver(),
      ],
      'react': {
        version: '19',
      },
    },
  }),
]);
