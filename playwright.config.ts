import {defineConfig, devices} from '@playwright/test';
import {defineBddConfig} from 'playwright-bdd';


const testDir = defineBddConfig({
    paths: ['features/*.feature'],
    require: ['steps/*.ts'],
    importTestFrom: 'fixtures/steps_fixtures.ts',
    quotes: 'single'
});

export default defineConfig({
    testDir,

    // global timeout
    timeout: 180000,
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                viewport: {
                    width: 1180,
                    height: 800
                },
            }
        }
    ]
});
