import tsEslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import eslintPluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
const eslintPluginPrettierRecommended = await import(
  'eslint-plugin-prettier/recommended'
)
import globals from 'globals'

export default defineConfigWithVueTs(
  vueTsConfigs.recommended,
  // All flat configs in this plugin are provided as arrays, so spread syntax is required when combining them with other configs. https://eslint.vuejs.org/user-guide/#bundle-configurations-eslint-config-js
  ...eslintPluginVue.configs['flat/essential'],
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended.default, // must be last to override other configs
  {
    plugins: { '@typescript-eslint': tsEslint.plugin },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser,
        sourceType: 'module',
        ecmaVersion: 2020,
        project: true,
        tsconfigRootDir: 'src',
        extraFileExtensions: ['.vue'],
      },
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
      },
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
  },
  {
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  }
)
