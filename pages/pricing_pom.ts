import { Page, expect, Locator, APIRequestContext, APIResponse } from "@playwright/test";
import { uivalidator } from '../pages/uivalidator';
import { FooterPage } from '../pages/footer_pom';

export class PricingPage {

    readonly page: Page;

    readonly request: APIRequestContext;

    constructor(page: Page, request: APIRequestContext) {
        this.page = page;
        this.request = request;
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

    get plancontainer(): Locator {
        return this.page.locator('div.pricing-card-public');
    }

    get freePlanCard(): Locator {
        return this.page
            .locator('.pricing-card-public')
            .filter({ has: this.page.getByRole('heading', { name: 'Free' }) });
    }

    get basicPlanCard(): Locator {
        return this.page
            .locator('.pricing-card-public')
            .filter({ has: this.page.getByRole('heading', { name: 'Basic' }) });
    }

    get standardPlanCard(): Locator {
        return this.page
            .locator('.pricing-card-public')
            .filter({ has: this.page.getByRole('heading', { name: 'Standard' }) });
    }

    get proPlanCard(): Locator {
        return this.page
            .locator('.pricing-card-public')
            .filter({ has: this.page.getByRole('heading', { name: 'Pro' }) });
    }


    get comparePlansContainer(): Locator {
        return this.page.locator('div.matrix-card');
    }

    get comparePlansTable(): Locator {
        return this.page.locator('table.shadcn-matrix-table');
    }

    get comparePlansHeaders(): Locator {
        return this.page.locator('table.shadcn-matrix-table thead th');
    }

    get comparePlansRows(): Locator {
        return this.page.locator('table.shadcn-matrix-table tbody tr');
    }

    get comparePlansCheckIcons(): Locator {
        return this.page.locator(
            'table.shadcn-matrix-table .check-circle-icon'
        );
    }


    get basicOldPrice(): Locator {
        return this.basicPlanCard.locator('.price-old');
    }

    get basicNewPrice(): Locator {
        return this.basicPlanCard.locator('.price-new');
    }

    get basicPriceCycle(): Locator {
        return this.basicPlanCard.locator('.price-cycle');
    }

    get basicSaveBadge(): Locator {
        return this.basicPlanCard.locator('.save-badge-green');
    }


    // =========================
    // STANDARD ANNUAL PRICE
    // =========================

    get standardOldPrice(): Locator {
        return this.standardPlanCard.locator('.price-old');
    }

    get standardNewPrice(): Locator {
        return this.standardPlanCard.locator('.price-new');
    }

    get standardPriceCycle(): Locator {
        return this.standardPlanCard.locator('.price-cycle');
    }

    get standardSaveBadge(): Locator {
        return this.standardPlanCard.locator('.save-badge-green');
    }


    // =========================
    // PRO ANNUAL PRICE
    // =========================

    get proOldPrice(): Locator {
        return this.proPlanCard.locator('.price-old');
    }

    get proNewPrice(): Locator {
        return this.proPlanCard.locator('.price-new');
    }

    get proPriceCycle(): Locator {
        return this.proPlanCard.locator('.price-cycle');
    }

    get proSaveBadge(): Locator {
        return this.proPlanCard.locator('.save-badge-green');
    }


    // =========================
    // FREE PLAN
    // =========================

    get freePrice(): Locator {
        return this.freePlanCard.locator('.pub-plan-price');
    }

    get freeBillingCycle(): Locator {
        return this.freePlanCard.locator('.pub-plan-bill-cycle');
    }

    get annualButton(): Locator {
        return this.page.getByRole('button', { name: 'Annual', exact: true });
    }


    async pricing_page() {


        const expectedRows = [
            [
                'AI AGENTS'
            ],

            [
                'Alfred — Social Media Agent',
                '✓',
                '✓',
                '✓',
                '✓'
            ],

            [
                'Diya — Social Strategy Agent',
                '✓',
                '✓',
                '✓',
                '✓'
            ],

            [
                'Kayal — Role Play Coach Agent',
                '✓',
                '✓',
                '✓',
                '✓'
            ],

            [
                'Tara — Relationship Agent',
                '✓',
                '✓',
                '✓',
                '✓'
            ],

            [
                'ALFRED — CONTENT GENERATION'
            ],

            [
                'AI-generated images / month',
                'Limited',
                '100 images',
                '250 images',
                '400 images'
            ],

            [
                'AI content words / month',
                'Limited',
                '100,000 words',
                '200,000 words',
                '300,000 words'
            ],

            [
                'DIYA — SOCIAL MEDIA'
            ],

            [
                'Social media posts / month',
                'Limited',
                '30 posts',
                '75 posts',
                '125 posts'
            ],

            [
                'KAYAL — ROLE PLAY'
            ],

            [
                'Access',
                'Limited',
                '✓',
                '✓',
                '✓'
            ],

            [
                'TARA — RELATIONSHIP'
            ],

            [
                'Access',
                '✓',
                '✓',
                '✓',
                '✓'
            ],

            [
                'SUPPORT'
            ],

            [
                'Support level',
                'Basic / Community Support',
                'Email Support',
                'Priority Email Support',
                'Priority Support'
            ]
        ];

        const validator = new uivalidator(this.page, this.request);

        await this.pricingpageHeaderContainer.click();

        await expect(this.pricingpageHeader_badge).toBeVisible({ timeout: 10000 });

        await expect(this.pricingpageHeader_h1).toBeVisible();
        await expect(this.pricingpageHeader_h1)
            .toHaveText('Simple pricing. Powerful AI.');

        await expect(this.pricingpageHeader_h2).toBeVisible();
        await expect(this.pricingpageHeader_h2)
            .toHaveText(
                'Start free and scale your AI capabilities as your business grows. Choose the plan that fits your needs and upgrade whenever you\'re ready.'
            );

        const priceh1 = await validator.getTextCss(
            this.pricingpageHeader_h1
        );

        const priceh2 = await validator.getTextCss(
            this.pricingpageHeader_h2
        );

        expect(priceh1).toMatchObject({
            text: 'Simple pricing. Powerful AI.',
            fontSize: '48px',
            fontWeight: '800',
            lineHeight: '55.2px',
            color: 'rgb(15, 23, 42)',
            textAlign: 'center',
            letterSpacing: '-1px',
            display: 'block',
            visibility: 'visible',
            opacity: '1'
        });

        expect(priceh2).toMatchObject({
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '25.6px',
            color: 'rgb(100, 116, 139)',
            textAlign: 'center',
            display: 'block',
            visibility: 'visible',
            opacity: '1'
        });



        // =========================
        // FREE PLAN
        // =========================

        await expect(this.freePlanCard).toBeVisible();

        await expect(this.freePlanCard).toContainText('Free');
        await expect(this.freePlanCard).toContainText(
            'Limited access, but all 4 AI agents are included.'
        );
        await expect(this.freePlanCard).toContainText('$0');
        await expect(this.freePlanCard).toContainText('/month');
        await expect(this.freePlanCard).toContainText('Free forever');
        await expect(this.freePlanCard).toContainText('Get Started');
        await expect(this.freePlanCard).toContainText('No card required');

        await expect(this.freePlanCard).toContainText(
            'Access to all 4 agents'
        );
        await expect(this.freePlanCard).toContainText(
            'Limited monthly usage'
        );
        await expect(this.freePlanCard).toContainText(
            'Limited AI content generation'
        );
        await expect(this.freePlanCard).toContainText(
            'Limited social media usage'
        );
        await expect(this.freePlanCard).toContainText(
            'Basic access to Simbli features'
        );
        await expect(this.freePlanCard).toContainText(
            'Community support'
        );


        // =========================
        // BASIC PLAN
        // =========================

        await expect(this.basicPlanCard).toBeVisible();

        await expect(this.basicPlanCard).toContainText('Basic');
        await expect(this.basicPlanCard).toContainText(
            'For individuals, creators, and small businesses.'
        );
        await expect(this.basicPlanCard).toContainText('$14');
        await expect(this.basicPlanCard).toContainText('/month');
        await expect(this.basicPlanCard).toContainText('Billed monthly');
        await expect(this.basicPlanCard).toContainText('Start Basic');
        await expect(this.basicPlanCard).toContainText('Cancel anytime');

        await expect(this.basicPlanCard).toContainText(
            'Access to all 4 agents'
        );
        await expect(this.basicPlanCard).toContainText(
            'Alfred: 100 AI images / month'
        );
        await expect(this.basicPlanCard).toContainText(
            'Alfred: 100,000 AI content words / month'
        );
        await expect(this.basicPlanCard).toContainText(
            'Diya: 30 social media posts / month'
        );
        await expect(this.basicPlanCard).toContainText(
            'Kayal & Tara included'
        );
        await expect(this.basicPlanCard).toContainText(
            'Email support'
        );


        // =========================
        // STANDARD PLAN
        // =========================

        await expect(this.standardPlanCard).toBeVisible();

        await expect(this.standardPlanCard).toContainText('Standard');
        await expect(this.standardPlanCard).toContainText(
            'For growing teams, social media managers, and professionals.'
        );
        await expect(this.standardPlanCard).toContainText('$29');
        await expect(this.standardPlanCard).toContainText('/month');
        await expect(this.standardPlanCard).toContainText('Billed monthly');
        await expect(this.standardPlanCard).toContainText('Start Standard');
        await expect(this.standardPlanCard).toContainText('Cancel anytime');

        await expect(this.standardPlanCard).toContainText(
            'Access to all 4 agents'
        );
        await expect(this.standardPlanCard).toContainText(
            'Alfred: 250 AI images / month'
        );
        await expect(this.standardPlanCard).toContainText(
            'Alfred: 200,000 AI content words / month'
        );
        await expect(this.standardPlanCard).toContainText(
            'Diya: 75 social media posts / month'
        );
        await expect(this.standardPlanCard).toContainText(
            'Kayal & Tara included'
        );
        await expect(this.standardPlanCard).toContainText(
            'Priority email support'
        );

        await expect(
            this.standardPlanCard.locator('.popular-top-badge')
        ).toBeVisible();

        await expect(
            this.standardPlanCard.locator('.popular-top-badge')
        ).toHaveText('MOST POPULAR');


        // =========================
        // PRO PLAN
        // =========================

        await expect(this.proPlanCard).toBeVisible();

        await expect(this.proPlanCard).toContainText('Pro');
        await expect(this.proPlanCard).toContainText(
            'For agencies, teams, and professionals who need more power.'
        );
        await expect(this.proPlanCard).toContainText('$39');
        await expect(this.proPlanCard).toContainText('/month');
        await expect(this.proPlanCard).toContainText('Billed monthly');
        await expect(this.proPlanCard).toContainText('Start Pro');
        await expect(this.proPlanCard).toContainText('Cancel anytime');

        await expect(this.proPlanCard).toContainText(
            'Access to all 4 agents'
        );
        await expect(this.proPlanCard).toContainText(
            'Alfred: 400 AI images / month'
        );
        await expect(this.proPlanCard).toContainText(
            'Alfred: 300,000 AI content words / month'
        );
        await expect(this.proPlanCard).toContainText(
            'Diya: 125 social media posts / month'
        );
        await expect(this.proPlanCard).toContainText(
            'Kayal & Tara included'
        );
        await expect(this.proPlanCard).toContainText(
            'Priority support'
        );

        const planCards = this.page.locator('div.pricing-card-public');

        await expect(this.plancontainer).toHaveCount(4);

        const expectedCommon = {
            width: '261px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            padding: '28px',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '16px',
            overflow: 'visible',
            visibility: 'visible',
            opacity: '1',
            zIndex: 'auto'
        };

        for (let i = 0; i < await planCards.count(); i++) {

            const card = planCards.nth(i);

            await expect(card).toBeVisible();

            await validator.validateContainerCss(
                card,
                expectedCommon
            );
        }

        await this.comparePlansContainer.scrollIntoViewIfNeeded();
        await expect(this.comparePlansContainer).toBeVisible();
        await expect(this.comparePlansTable).toBeVisible();

        await expect(this.comparePlansHeaders).toHaveText([
            'Features',
            'Free',
            'Basic',
            'Standard',
            'Pro'
        ]);

        const rows = this.comparePlansRows;

        await expect(rows).toHaveCount(16);

        await expect(rows.nth(1)).toContainText('Alfred — Social Media Agent');
        await expect(rows.nth(2)).toContainText('Diya — Social Strategy Agent');
        await expect(rows.nth(3)).toContainText('Kayal — Role Play Coach Agent');
        await expect(rows.nth(4)).toContainText('Tara — Relationship Agent');

        await expect(rows.nth(6)).toContainText('AI-generated images / month');
        await expect(rows.nth(6)).toContainText('Limited');
        await expect(rows.nth(6)).toContainText('100 images');
        await expect(rows.nth(6)).toContainText('250 images');
        await expect(rows.nth(6)).toContainText('400 images');

        await expect(rows.nth(7)).toContainText('AI content words / month');
        await expect(rows.nth(7)).toContainText('100,000 words');
        await expect(rows.nth(7)).toContainText('200,000 words');
        await expect(rows.nth(7)).toContainText('300,000 words');

        await expect(rows.nth(9)).toContainText('Social media posts / month');
        await expect(rows.nth(9)).toContainText('30 posts');
        await expect(rows.nth(9)).toContainText('75 posts');
        await expect(rows.nth(9)).toContainText('125 posts');

        await expect(rows.nth(11)).toContainText('Access');
        await expect(rows.nth(11)).toContainText('Limited');

        await expect(rows.nth(13)).toContainText('Access');

        await expect(rows.nth(15)).toContainText('Support level');
        await expect(rows.nth(15)).toContainText('Basic / Community Support');
        await expect(rows.nth(15)).toContainText('Email Support');
        await expect(rows.nth(15)).toContainText('Priority Email Support');
        await expect(rows.nth(15)).toContainText('Priority Support');

        await expect(this.comparePlansCheckIcons).toHaveCount(23);

        const expectedMatrixCss = {
            display: 'block',
            visibility: 'visible',
            opacity: '1'
        };

        await validator.validateContainerCss(
            this.comparePlansContainer,
            expectedMatrixCss
        );

        const expectedTableCss = {
            display: 'table',
            visibility: 'visible',
            opacity: '1'
        };

        await validator.validateContainerCss(
            this.comparePlansTable,
            expectedTableCss
        );

        await this.annualButton.click();

        await expect(this.basicOldPrice).toHaveText('$14');
        await expect(this.basicNewPrice).toHaveText('$12');
        await expect(this.basicSaveBadge).toHaveText('Save 15%');

        await expect(this.standardOldPrice).toHaveText('$29');
        await expect(this.standardNewPrice).toHaveText('$25');
        await expect(this.standardSaveBadge).toHaveText('Save 15%');

        await expect(this.proOldPrice).toHaveText('$39');
        await expect(this.proNewPrice).toHaveText('$33');
        await expect(this.proSaveBadge).toHaveText('Save 15%');


        const footerPage = new FooterPage(this.page, this.request);

        await footerPage.footer();



    }

}

