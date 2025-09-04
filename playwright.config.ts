import { defineConfig,devices } from "@playwright/test";

export default defineConfig(
    {
        fullyParallel: false,
        workers:4,
        timeout: 60000,

        use: {
            headless: false,
        },
        projects: [
            {
                name: 'chromium',
                use: { ...devices['Desktop Chrome'] },
            },
        ]
    });