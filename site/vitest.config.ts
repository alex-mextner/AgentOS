import { defineConfig } from 'vitest/config';
import react from '@astrojs/react';

export default defineConfig({
  // @astrojs/react brings the JSX/React transform so .tsx islands compile under Vitest.
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['test/**/*.test.{ts,tsx}'],
  },
});
