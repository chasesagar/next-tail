import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**', '*.min.js'],
  },
  {
    // Configure TypeScript resolver for path aliases
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
  {
    // Add custom rules
    rules: {
      'import/order': [
        'error',
        {
          // Define import groups
          groups: [
            'builtin', // Built-in Node.js modules (e.g., fs, path)
            'external', // Third-party modules (e.g., react, next/*)
            ['internal', 'parent', 'sibling', 'index'], // Project modules
          ],
          'newlines-between': 'always', // Add a blank line between groups
          alphabetize: {
            order: 'asc', // Sort alphabetically within each group
            caseInsensitive: true, // Ignore case when sorting
          },
        },
      ],
    },
  },
];

export default eslintConfig;
