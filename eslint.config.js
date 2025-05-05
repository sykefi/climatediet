import tsEslint from '@typescript-eslint'
import vueEslitParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.js'],
    root: true,
    env: {
      es2021: true,
    },
    extends: [
      '@vue/typescript/recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // must be last to override other configs
    ],
    plugins: { '@typescript-eslint': tsEslint },
    languageOptions: {
      parser: vueEslitParser,
      parser: tsEslint.parser, // TODO: check if two parsers are allowed
      sourceType: 'module',
      ecmaVersion: 2020,
      project: true,
      tsconfigRootDir: 'src',
      extraFileExtensions: ['.vue'],
      es2021: true, // TODO: check if this works. based on https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options, should use globals package
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/require-default-prop': 'off',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            '{}': {
              message: 'Use object instead',
            },
            Function: {
              message:
                'Use a specific function type instead, like `() => void`',
            },
            Object: {
              message: 'Use {} instead',
            },
            Number: {
              message: 'Use number instead',
            },
          },
        },
      ],
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)',
        ],
        env: {
          mocha: true,
        },
      },
    ],
  },
]
