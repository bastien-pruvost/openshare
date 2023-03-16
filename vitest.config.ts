import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: false,
    setupFiles: './vitest.setup.ts',
    environment: 'jsdom',
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true',
    },
  },
});
