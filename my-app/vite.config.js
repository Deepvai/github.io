// / <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:"/github.io/",
  test: {
    environment: 'jsdom', // ✅ important
    globals: true,         // ✅ optional, for global 'test', 'expect' etc.
    setupFiles: './setupTests.js', // optional if you need extra setup
  },
})
