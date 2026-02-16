import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import PrerenderWrap from '@prerenderer/rollup-plugin'
import Renderer from '@prerenderer/renderer-puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    PrerenderWrap({
      routes: [
        '/',
        '/component-preview',
        '/ai-tips/ai',
        '/ai-tips/devs',
        '/playground',
        '/elevenlabs',
        '/github',
        '/vercel',
        '/chatgpt'
      ],
      renderer: new Renderer({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
      }),
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 1000,
      }
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})