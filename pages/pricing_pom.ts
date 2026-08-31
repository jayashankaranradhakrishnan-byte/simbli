import { Page, Locator } from '@playwright/test';
import { uivalidator } from '../pages/uivalidator';
import { FooterPage } from '../pages/footer_pom';

export class PricingPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    get pricingpageHeaderContainer(): Locator {
        return this.page.getByText('Pricing', { exact: true });
    }






}

