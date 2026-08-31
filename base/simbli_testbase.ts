// import { test as base, BrowserContext, Page } from '@playwright/test';

// let context: BrowserContext;
// let page: Page;

// export const test = base.extend({
//     page: async ({ }, use) => {
//         await use(page);
//     }
// });

// export { expect } from '@playwright/test';

// // Global setup
// test.beforeAll(async ({ browser }) => {
//     context = await browser.newContext({
//         viewport: null,
//     });
//     page = await context.newPage();
//     await page.goto('https://www.simbli.ai/');
// });

// // Global teardown
// test.afterAll(async () => {
//     await context.close();
// });


import { test as base, expect } from '@playwright/test';

export const test = base.extend({
    page: async ({ page, browser }, use) => {
        // const context = await browser.newContext({
        //     viewport: { width: 1366, height: 641 },
        // });

        // const page = await context.newPage();

        //     await page.goto('https://www.simbli.ai/', {
        //         waitUntil: 'domcontentloaded',
        //         timeout: 60000,
        //     });

        //     // await page.goto('https://www.dev.simbli.ai/', {
        //     //     waitUntil: 'domcontentloaded',
        //     //     timeout: 30000,
        //     // });

        //     await use(page);

        //     //await context.close();
        // },

        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 60_000,
        });

        await use(page);
    },

});

export { expect };


