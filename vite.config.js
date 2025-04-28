import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType : 'autoUpdate',

      manifest: {
        name: 'Futurama App',
        short_name: 'FutuAPP',
        description: 'Esta es una app de Futurama',
        theme_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'public\icons\Bender192.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'public\icons\Bender512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,json}'],
      },
    }),
  ],
})
