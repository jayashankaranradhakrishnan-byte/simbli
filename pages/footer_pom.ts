
import { Page, expect, Locator, APIRequestContext, APIResponse } from "@playwright/test";
import { uivalidator } from '../pages/uivalidator';

export class FooterPage {

    readonly page: Page;

    readonly request: APIRequestContext;

    readonly companyDescription;
    readonly socialIcons;

    // Footer sections
    readonly whoWeAreSection;
    readonly otherLinksSection;
    readonly contactSection;
    readonly newsletterSection;

    // Footer links
    readonly aboutUsLink;
    readonly ourTeamButton;
    readonly termsLink;
    readonly privacyLink;
    readonly refundLink;
    readonly contactUsLink;

    // Contact links
    readonly whatsappLink;
    readonly phoneLink;
    readonly emailLink;

    // Newsletter
    readonly newsletterInput;
    readonly newsletterSendButton;

    // Social links
    readonly youtubeLink;
    readonly xLink;
    readonly instagramLink;
    readonly facebookLink;
    readonly linkedinLink;

    // External badge
    readonly taaftLink;

    constructor(page: Page, request: APIRequestContext) {
        this.page = page;
        this.request = request;

        this.companyDescription = page.locator(
            '.footer-container .branding-section .company-description'
        );

        this.socialIcons = page.locator(
            '.footer-container .social-icons .social-icon'
        );

        // Sections
        this.whoWeAreSection = page.locator(
            '.footer-container .footer-section').nth(1);

        this.otherLinksSection = page.locator(
            '.footer-container .footer-section').nth(2);

        this.contactSection = page.locator(
            '.footer-container .footer-section').nth(3);

        this.newsletterSection = page.locator(
            '.footer-container .get-started-section'
        );

        // Links
        this.aboutUsLink = page.getByRole('link', {
            name: 'About Us',
            exact: true
        });

        this.ourTeamButton = page.getByRole('button', {
            name: 'Our Team',
            exact: true
        });

        this.termsLink = page.getByRole('link', {
            name: 'Terms of Service',
            exact: true
        });

        this.privacyLink = page.getByRole('link', {
            name: 'Privacy Policy',
            exact: true
        });

        this.refundLink = page.getByRole('link', {
            name: 'Refund Policy',
            exact: true
        });

        this.contactUsLink = page.getByRole('link', {
            name: 'Contact Us',
            exact: true
        });

        this.whatsappLink = page.locator(
            'a[href="https://wa.me/919500988980"]'
        );

        this.phoneLink = page.locator(
            'a[href="tel:+914522522257"]'
        );

        this.emailLink = page.locator(
            'a[href="mailto:contact@simbli.ai"]'
        );

        // Social
        this.youtubeLink = page.locator(
            'a[aria-label="youtube"]'
        );

        this.xLink = page.locator(
            'a[aria-label="X (formerly Twitter)"]'
        );

        this.instagramLink = page.locator(
            'a[aria-label="Instagram"]'
        );

        this.facebookLink = page.locator(
            'a[aria-label="Facebook"]'
        );

        this.linkedinLink = page.locator(
            'a[aria-label="LinkedIn"]'
        );

        // TAAFT
        this.taaftLink = page.locator(
            'a[href*="theresanaiforthat.com/ai/simbli-ai"]'
        );

        // Newsletter
        this.newsletterInput = page.locator(
            '.email-input'
        );

        this.newsletterSendButton = page.locator(
            '.email-send-button'
        );


    }

    get outerfootercontainer(): Locator {
        return this.page.getByRole('contentinfo');
    }

    get innerfootercontainer(): Locator {
        return this.page.locator('div.footer-container');
    }

    get footerlogo(): Locator {
        return this.page.locator("//div[@class='logo-icon']//img");
    }


    async footer() {
        const validator = new uivalidator(this.page, this.request);

        const expectedOuterFooterCss = {
            width: '1265px',
            height: '422.062px',
            position: 'static',
            display: 'block',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'normal',
            alignItems: 'normal',
            alignContent: 'normal',
            gap: 'normal',
            rowGap: 'normal',
            columnGap: 'normal',
            gridTemplateColumns: 'none',
            gridTemplateRows: 'none',
            margin: '0px',
            padding: '60px 0px 0px',
            backgroundColor: 'rgb(0, 0, 0)',
            backgroundImage: 'none',
            border: '0px none rgb(255, 255, 255)',
            borderRadius: '0px',
            boxShadow: 'none',
            overflow: 'visible',
            overflowX: 'visible',
            overflowY: 'visible',
            visibility: 'visible',
            opacity: '1',
            zIndex: 'auto'
        };

        const expectedInnerFooterCss = {
            width: '1200px',
            height: '269.562px',
            position: 'static',
            display: 'grid',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'normal',
            alignItems: 'start',
            alignContent: 'normal',
            gap: '40px',
            rowGap: '40px',
            columnGap: '40px',
            gridTemplateColumns: '273.812px 136.906px 136.906px 170.125px 282.25px',
            gridTemplateRows: '269.562px',
            margin: '0px 32.5px',
            padding: '0px 20px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backgroundImage: 'none',
            border: '0px none rgb(255, 255, 255)',
            borderRadius: '0px',
            boxShadow: 'none',
            overflow: 'visible',
            overflowX: 'visible',
            overflowY: 'visible',
            visibility: 'visible',
            opacity: '1',
            zIndex: 'auto'
        };

        const expectedFooterLogoCss = {
            src: 'https://www.simbli.ai/assets/footer-logo-DXw0c_xK.svg',
            alt: '',
            width: '153px',
            height: '40px',
            naturalWidth: 153,
            naturalHeight: 40,
            objectFit: 'fill',
            objectPosition: '50% 50%',
            border: '0px none rgb(74, 222, 128)',
            borderRadius: '0px',
            opacity: '1',
            boxShadow: 'none',
            display: 'block',
            position: 'static',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        };

        const outerfootercontainerCss = await validator.getContainerCss(this.outerfootercontainer);

        const innerfootercontainerCss = await validator.getContainerCss(this.innerfootercontainer);

        const footerlogoCss = await validator.getImageCss(this.footerlogo);

        await this.outerfootercontainer.scrollIntoViewIfNeeded();

        await validator.validateContainerCss(
            this.outerfootercontainer,
            expectedOuterFooterCss
        );

        await validator.validateContainerCss(
            this.innerfootercontainer,
            expectedInnerFooterCss
        );

        await validator.validateImageCss(
            this.footerlogo,
            expectedFooterLogoCss
        );



        await expect(this.companyDescription).toBeVisible();

        await expect(this.companyDescription).toHaveText(
            'Human-like agents. Trained for specific roles. Built for creators, teams, and learners who want to move faster with AI.'
        );


        // =========================
        // SOCIAL LINKS
        // =========================

        await expect(this.socialIcons).toHaveCount(5);

        await expect(this.youtubeLink).toHaveAttribute(
            'href',
            'https://www.youtube.com/@Simbli-ai'
        );

        await expect(this.xLink).toHaveAttribute(
            'href',
            'https://x.com/Simbli_ai'
        );

        await expect(this.instagramLink).toHaveAttribute(
            'href',
            'https://www.instagram.com/simbli.ai/'
        );

        await expect(this.facebookLink).toHaveAttribute(
            'href',
            'https://www.facebook.com/SimbliAi/'
        );

        await expect(this.linkedinLink).toHaveAttribute(
            'href',
            'https://www.linkedin.com/company/simbliai'
        );


        // =========================
        // WHO WE ARE
        // =========================

        await expect(this.whoWeAreSection).toBeVisible();

        await expect(this.whoWeAreSection).toContainText(
            'Who We Are'
        );

        await expect(this.aboutUsLink).toBeVisible();

        await expect(this.aboutUsLink).toHaveAttribute(
            'href',
            '/about'
        );

        await expect(this.ourTeamButton).toBeVisible();


        // =========================
        // OTHER LINKS
        // =========================

        await expect(this.otherLinksSection).toBeVisible();

        await expect(this.otherLinksSection).toContainText(
            'Other Links'
        );

        await expect(this.termsLink).toHaveAttribute(
            'href',
            'https://www.simbli.ai/terms-and-conditions.html'
        );

        await expect(this.privacyLink).toHaveAttribute(
            'href',
            'https://www.simbli.ai/privacy-policy.html'
        );

        await expect(this.refundLink).toHaveAttribute(
            'href',
            'https://www.simbli.ai/refund-policy.html'
        );


        // =========================
        // CONTACT
        // =========================

        await expect(this.contactSection).toBeVisible();

        await expect(this.contactUsLink).toHaveAttribute(
            'href',
            '/contact'
        );

        await expect(this.whatsappLink).toHaveAttribute(
            'href',
            'https://wa.me/919500988980'
        );

        await expect(this.phoneLink).toHaveAttribute(
            'href',
            'tel:+914522522257'
        );

        await expect(this.emailLink).toHaveAttribute(
            'href',
            'mailto:contact@simbli.ai'
        );


        // =========================
        // NEWSLETTER
        // =========================

        await expect(this.newsletterSection).toBeVisible();

        await expect(this.newsletterSection).toContainText(
            'Subscribe to our Newsletter'
        );

        await expect(this.newsletterSection).toContainText(
            'Want the latest updates? Stay in the loop with Simbli’s AI agents: Alfred, Kayal, Tara & Diya.'
        );

        await expect(this.newsletterInput).toBeVisible();

        await expect(this.newsletterInput).toHaveAttribute(
            'placeholder',
            'Enter your Email'
        );

        await expect(this.newsletterInput).toHaveAttribute(
            'type',
            'email'
        );

        await expect(this.newsletterSendButton).toBeVisible();


        // =========================
        // TAAFT LINK
        // =========================

        await expect(this.taaftLink).toBeVisible();

        await expect(this.taaftLink).toHaveAttribute(
            'href',
            'https://theresanaiforthat.com/ai/simbli-ai/?ref=featured&v=7816412'
        );

        await expect(this.taaftLink).toHaveAttribute(
            'target',
            '_blank'
        );

        await expect(this.taaftLink).toHaveAttribute(
            'rel',
            'nofollow'
        );

        console.log('✅ Footer validation completed successfully');



    }


}

