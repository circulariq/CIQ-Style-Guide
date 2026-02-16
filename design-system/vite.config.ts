import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Custom plugin to inject AI Context into the HTML shell for fetchers
function aiFriendlyPlugin() {
  return {
    name: 'ai-friendly-injection',
    transformIndexHtml(html: string) {
      try {
        const contextPath = path.resolve(__dirname, '../AI_CONTEXT.md')
        if (fs.existsSync(contextPath)) {
          const content = fs.readFileSync(contextPath, 'utf-8')
          // Inject content into a hidden div so AI fetchers can see it in the initial HTML
          return html.replace(
            '</body>',
            `<div id="ai-context-static" style="display:none" aria-hidden="true">
${content}
</div>
</body>`
          )
        }
      } catch (e) {
        console.warn('AI Context injection failed:', e)
      }
      return html
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    aiFriendlyPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})