import { Page, Locator } from '@playwright/test';

export class AboutUsPage {

    readonly page: Page;
    readonly aboutUsLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.aboutUsLink = page.getByRole('link', {
            name: 'About Us',
            exact: true
        });
    }

    async clickAboutUs() {
        await this.aboutUsLink.click();
    }

    async validateAboutUsPage() {
        await this.page.waitForLoadState('domcontentloaded');
    }
}

