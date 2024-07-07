import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const ignoreFiles = [
  '**/node_modules/*',
  '**/dist/*',
  '**/dist-*/*',
  '**/tests/**/*.js',
  '**/scripts/**/*.js',
  '**/tmp/*',
  '**/bin/*'
];

const funcsAndBlocks = [
  'function',
  'expression',
  'block-like',
  'multiline-expression',
  'multiline-block-like'
];

const varsAndSuch = [
  'const',
  'let',
  'var',
  'multiline-const',
  'multiline-let',
  'multiline-var',
];

export default [
  {
    files: ['**/*.{ts}'],
  },
  {
    ignores: ignoreFiles
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      'quotes': ['error', 'single', {
        allowTemplateLiterals: true,
        avoidEscape: true,
      }],
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-unary-ops': 'error',
      'space-infix-ops': 'error',
      'comma-style': ['error', 'last'],
      'operator-linebreak': ['error', 'after'],
      'multiline-ternary': ['error', 'always-multiline'],
      'space-before-blocks': 'error',
      'space-in-parens': ['error', 'never'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'return',
            'continue',
            'break',
            'default',
            'case',
            'function',
            'class',
            'throw',
            'try',
          ]
        },
        { blankLine: 'always', prev: funcsAndBlocks, next: '*' },
        { blankLine: 'always', prev: '*', next: funcsAndBlocks, },
        { blankLine: 'always', prev: varsAndSuch, next: '*' },
        { blankLine: 'always', prev: '*', next: varsAndSuch, },
        { blankLine: 'any', prev: varsAndSuch, next: varsAndSuch, },
        { blankLine: 'any', prev: 'expression', next: 'expression', },
      ],
    }
  }
];