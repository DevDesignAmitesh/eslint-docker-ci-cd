import js from '@eslint/js';
import next from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      'react/react-in-jsx-scope': 'off',
      'jsx-quotes': ['error', 'prefer-double'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'only-multiline'],
    },
  },
];
