import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'social-image-url',
    transformIndexHtml(html) {
      const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
      const origin = process.env.SOCIAL_SITE_URL || (host ? `https://${host}` : '')
      return html.replaceAll('%SOCIAL_IMAGE_URL%', `${origin.replace(/\/$/, '')}/assets/IMG_1095.jpg`)
    },
  }],
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('@react-three/fiber') || id.includes('@react-three/drei')) return 'r3f'
          if (id.includes('node_modules/gsap')) return 'gsap'
          if (id.includes('node_modules/framer-motion')) return 'framer'
        },
      },
    },
  },
})
