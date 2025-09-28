import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import jsPlugin from '@eslint/js';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
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

const definePrettierConfig = (configObject) => {
  if (!configObject.extends) configObject.extends = [];
  configObject.extends.push(prettierPluginRecommended);

  if (!configObject.rules) configObject.rules = {};
  configObject.rules['prettier/prettier'] = 'warn';

  return configObject;
};

export default defineConfig([
  globalIgnores(['/dist/', '/extra/']),
  {
    name: 'shared',
    files: ['**/*.{cjs,mjs,ts,tsx}'],
    rules: {
      'prefer-const': [
        'warn',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  },
  definePrettierConfig({
    name: 'tools/shared',
    files: ['*.config.{cjs,mjs}'],
    linterOptions: {
      reportUnusedInlineConfigs: 'warn',
    },
    plugins: {
      js: jsPlugin,
    },
    extends: [jsPlugin.configs.recommended],
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
  definePrettierConfig({
    name: 'src',
    files: ['src/**/*.ts?(x)'],
    extends: [
      jsPlugin.configs.recommended,
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
      react: {
        version: '19',
      },
    },
  }),
]);
