import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env
const env = config({ path: resolve(process.cwd(), '.env') }).parsed;

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    env: {
      VITE_SUPABASE_URL: env.VITE_SUPABASE_URL,
      VITE_SUPABASE_ANON_KEY: env.VITE_SUPABASE_ANON_KEY,
    },
  },
}); 