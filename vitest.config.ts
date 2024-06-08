// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom', // Use jsdom for React component testing
        setupFiles: './vitest.setup.ts', // Optional, if you have any setup files
    },
});
