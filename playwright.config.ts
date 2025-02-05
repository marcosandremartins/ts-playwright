import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
  },
});
