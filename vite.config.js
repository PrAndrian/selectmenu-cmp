import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'; // If you're using Tailwind CSS
import autoprefixer from 'autoprefixer'; // Import autoprefixer

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.jsx'),
      name: 'selectMenu-cmp',
      fileName: (format) => `selectMenu-cmp.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      },
      plugins: [tailwindcss()]
    },
    test: {
      globals: false,
      environment: 'jsdom'
    },
    css: {
      // Add PostCSS plugins to the preprocess options
      preprocess: {
        // Use the PostCSS plugin and specify its configuration file
        postcss: {
          plugins: [
            autoprefixer(), // Include autoprefixer
          ],
        },
      },
    },
  },
  plugins: [react(),tailwindcss()]
})