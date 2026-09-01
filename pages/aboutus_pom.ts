import { Page, expect, Locator, APIRequestContext, APIResponse } from "@playwright/test";
import { uivalidator } from '../pages/uivalidator';
import { FooterPage } from '../pages/footer_pom';

export class AboutUsPage {

    readonly page: Page;

    readonly request: APIRequestContext;

    constructor(page: Page, request: APIRequestContext) {
        this.page = page;
        this.request = request;
    }

    get aboutus_button(): Locator {
        return this.page.locator('p:has-text("About Us")');
    }

    get aboutBanner(): Locator {
        return this.page.locator('div.about-banner');
    }

    get aboutBannerTitle(): Locator {
        return this.page.locator('div.about-banner h1');
    }

    get aboutBannerDescription(): Locator {
        return this.page.locator('div.about-banner h6');
    }

    get aboutSimbliContainer(): Locator {
        return this.page.locator('div.alfred-aboutus');
    }

    get aboutSimbliTitle(): Locator {
        return this.page.locator('div.about-text h2');
    }

    get aboutSimbliDescription1(): Locator {
        return this.page.locator('div.about-text p').nth(0);
    }

    get aboutSimbliDescription2(): Locator {
        return this.page.locator('div.about-text p').nth(1);
    }

    get instantAccessTitle(): Locator {
        return this.page.locator('div.aboutcards').nth(0).locator('h6');
    }

    get instantAccessDescription(): Locator {
        return this.page.locator('div.aboutcards').nth(0).locator('p');
    }

    get smartAutomationTitle(): Locator {
        return this.page.locator('div.aboutcards').nth(1).locator('h6');
    }

    get smartAutomationDescription(): Locator {
        return this.page.locator('div.aboutcards').nth(1).locator('p');
    }

    get fullControlTitle(): Locator {
        return this.page.locator('div.aboutcards').nth(2).locator('h6');
    }

    get fullControlDescription(): Locator {
        return this.page.locator('div.aboutcards').nth(2).locator('p');
    }

    get aboutimage(): Locator {
        return this.page.locator("//img[contains(@src,'/assets/about-BGyVSSTq.svg')]");
    }

    async aboutus() {

        const validator = new uivalidator(this.page, this.request);

        await this.aboutus_button.click();

        const expectedTitle =
            'SMART AGENTS SMARTER WORKFLOWS SIMPLEST SETUP';

        const expectedDescription =
            'Access ready-to-use AI Agents built to simplify your daily tasks - from content creation to workflow management. Work faster, stay consistent, and automate intelligently - no setup or coding required.';


        await expect(this.aboutBannerTitle).toHaveText(expectedTitle);

        await expect(this.aboutBannerDescription).toHaveText(expectedDescription);

        await expect(this.aboutSimbliTitle).toHaveText(
            'About Simbli'
        );

        await expect(this.aboutSimbliDescription1).toHaveText(
            'At Simbli.ai, we believe intelligent automation should feel effortless. Simbli is an AI platform designed to make everyday work simpler by giving individuals and teams access to specialized AI agents that think, learn, and assist.'
        );

        await expect(this.aboutSimbliDescription2).toHaveText(
            'Each agent inside Simbli is built to solve real business challenges - whether it’s content creation, communication, or operational efficiency - without any technical setup. With seamless access, built-in intelligence, and a focus on user experience, Simbli helps people work smarter, not harder.'
        );

        await expect(this.instantAccessTitle).toHaveText(
            'Instant Access'
        );

        await expect(this.instantAccessDescription).toHaveText(
            'Use AI agents instantly. No setup, no coding'
        );

        await expect(this.smartAutomationTitle).toHaveText(
            'Smart Automation'
        );

        await expect(this.smartAutomationDescription).toHaveText(
            'Simplify workflows and save hours every day'
        );

        await expect(this.fullControlTitle).toHaveText(
            'Full Control'
        );

        await expect(this.fullControlDescription).toHaveText(
            'Manage, monitor, and collaborate securely inside Simbli.'
        );

        // const aboutimg = await validator.getImageCss(this.aboutimage);
        // console.log("about image is", aboutimg);


        const expectedAboutImageCss = {
            src: 'https://www.simbli.ai/assets/about-BGyVSSTq.svg',
            alt: '',
            width: '476px',
            height: '0px',
            naturalWidth: 0,
            naturalHeight: 0,
            objectFit: 'fill',
            objectPosition: '50% 50%',
            border: '0px none rgb(33, 37, 41)',
            borderRadius: '0px',
            opacity: '1',
            boxShadow: 'none',
            display: 'inline',
            position: 'static',
            backgroundColor: 'rgba(0, 0, 0, 0)',
        };

        await validator.validateImageCss(
            this.aboutimage,
            expectedAboutImageCss
        );



    }





}

