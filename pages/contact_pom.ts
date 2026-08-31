import { Page, Locator } from '@playwright/test';

export class ContactPage {

    readonly page: Page;
    readonly contactLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.contactLink = page.getByRole('link', {
            name: 'Contact',
            exact: true
        });
    }

    async clickContact() {
        await this.contactLink.click();
    }

    async validateContactPage() {
        await this.page.waitForLoadState('domcontentloaded');
    }
}

