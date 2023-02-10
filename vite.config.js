import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPlugin from 'vite-plugin-html-config'

const htmlPluginOpt = {
  title: 'Kino Retro 2023',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPlugin(htmlPluginOpt)
  ],
})
