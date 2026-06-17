import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-outside-ability-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/ability_images/')) {
            const relativePath = req.url.substring('/ability_images/'.length);
            const decodedPath = decodeURIComponent(relativePath);
            const filePath = path.resolve(__dirname, '../ability_images', decodedPath);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/ability_images/')) {
            const relativePath = req.url.substring('/ability_images/'.length);
            const decodedPath = decodeURIComponent(relativePath);
            const filePath = path.resolve(__dirname, '../ability_images', decodedPath);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
