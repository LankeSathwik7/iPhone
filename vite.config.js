import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "student-developer-c2",
    project: "iphone"
  })],

  build: {
    sourcemap: true
  }
})