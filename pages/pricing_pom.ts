import { Page, Locator, expect } from '@playwright/test';
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

    get pricingpageHeader_badge(): Locator {
        return this.page.locator('div.pricing-badge-pill');
    }

    get pricingpageHeader_h1(): Locator {
        return this.page.getByRole('heading', { name: 'Simple pricing. Powerful AI.' });
    }

    get pricingpageHeader_h2(): Locator {
        return this.page.locator('p.pricing-main-subtitle');
    }



    async pricing_page() {
        await this.pricingpageHeaderContainer.click();

        await expect(this.pricingpageHeader_badge).toBeVisible();

        await expect(this.pricingpageHeader_h1).toBeVisible();
        await expect(this.pricingpageHeader_h1)
            .toHaveText('Simple pricing. Powerful AI.');

        await expect(this.pricingpageHeader_h2).toBeVisible();
        await expect(this.pricingpageHeader_h2)
            .toHaveText(
                'Start free and scale your AI capabilities as your business grows. Choose the plan that fits your needs and upgrade whenever you\'re ready.'
            );

    }






}

