import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperClasses: 'markdown-content',
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
