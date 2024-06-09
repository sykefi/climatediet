/// <reference types="vitest" />

import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(configEnv => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: ['tests/unit/setup.ts'],
    },
  })
))