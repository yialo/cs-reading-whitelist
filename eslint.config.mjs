import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import jsPlugin from '@eslint/js';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import tsEslint from 'typescript-eslint';

const sharedRules = {
  'prefer-const': [
    'warn',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    },
  ],
  'prettier/prettier': 'warn',
};

const jsTsCompatRules = {
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

const toolSharedConfig = {
  linterOptions: {
    reportUnusedInlineConfigs: 'warn',
  },
  plugins: {
    js: jsPlugin,
  },
  extends: [jsPlugin.configs.recommended, prettierPluginRecommended],
  rules: {
    ...sharedRules,
    'no-unused-vars': jsTsCompatRules['no-unused-vars'],
  },
};

export default defineConfig([
  globalIgnores(['*.html', '/dist/', '/extra/']),
  {
    name: 'tool-configs/esm',
    files: ['./*.config.mjs'],
    ...toolSharedConfig,
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  },
  {
    name: 'tool-configs/commonjs',
    files: ['./*.config.cjs'],
    ...toolSharedConfig,
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    name: 'src-config',
    files: ['./src/**/*.ts?(x)'],
    extends: [
      jsPlugin.configs.recommended,
      tsEslint.configs.recommendedTypeChecked,
      prettierPluginRecommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...sharedRules,
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': jsTsCompatRules['no-unused-vars'],
    },
  },
]);
