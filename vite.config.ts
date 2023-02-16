import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env.VITE_SERVER_BASE_URL = process.env.SERVER_BASE_URL || '/api';
  process.env.VITE_ENABLE_MSW = (
    mode === 'development' || process.env.VITE_BUILD_DEMO === 'true'
  ).toString();

  console.log('config', {
    mode,
    VITE_SERVER_BASE_URL: process.env.VITE_SERVER_BASE_URL,
    VITE_ENABLE_MSW: process.env.VITE_ENABLE_MSW,
  });

  return {
    base: process.env.REACT_BASE || '/',
    plugins: [react()],
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        '~bootstrap-icons': path.resolve(
          __dirname,
          'node_modules/bootstrap-icons'
        ),
      },
    },
  };
});
