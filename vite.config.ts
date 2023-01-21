import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('command', command);
  console.log('mode', mode);
  process.env.VITE_ENABLE_MSW = (
    mode === 'dev' || process.env.VITE_BUILD_DEMO === 'true'
  ).toString();

  return {
    base: process.env.REACT_BASE || '/',
    plugins: [react()],
  };
});
