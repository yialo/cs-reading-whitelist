'use strict';

module.exports = {
  env: {
    es2024: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['./src/**/*.{ts,tsx}'],
      extends: [
        'next/core-web-vitals',
        'next/typescript',
        'plugin:prettier/recommended',
      ],
      env: {
        browser: true,
      },
      settings: {
        'import/order': 'off',
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
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
    {
      files: ['./*.cjs'],
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'commonjs',
      },
      rules: {
        'prettier/prettier': 'warn',
      },
    },
    {
      files: ['./*.mjs'],
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 'warn',
      },
    },
  ],
};
