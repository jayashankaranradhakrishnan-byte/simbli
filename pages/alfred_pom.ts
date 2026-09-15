import {
    Page,
    expect,
    Locator,
    APIRequestContext,
    APIResponse,
} from "@playwright/test";
import { uivalidator } from "../pages/uivalidator";
import { FooterPage } from "../pages/footer_pom";
import { landingPage } from "./landing_pom";

export class AlfredPage {
    readonly page: Page;

    readonly request: APIRequestContext;

    constructor(page: Page, request: APIRequestContext) {
        this.page = page;
        this.request = request;
    }

    get goToAlfred(): Locator {
        return this.page.getByRole("link", {
            name: "Go to Alfred",
        });
    }

    get aiChat(): Locator {
        return this.alfredPage.getByText("AI Chat", {
            exact: true,
        });
    }

    get myPosts(): Locator {
        return this.alfredPage
            .locator("button")
            .filter({ hasText: "My Posts" })
            .first();
    }

    get socialMedia(): Locator {
        return this.alfredPage.getByText("Social Media", {
            exact: true,
        });
    }

    get quickGuide(): Locator {
        return this.alfredPage.getByRole("button", {
            name: "Quick Guide",
        });
    }

    get alfredDropdown(): Locator {
        return this.alfredPage.getByRole("button", {
            name: /Alfred Social Media Agent/,
        });
    }

    get alfredDropdownContainer(): Locator {
        return this.alfredPage
            .locator("div")
            .filter({
                has: this.alfredDropdown,
            })
            .first();
    }

    get agentMenu(): Locator {
        return this.alfredPage
            .getByRole("menu")
            .filter({
                has: this.alfredPage.getByRole("menuitem", {
                    name: /Diya|Tara|Kayal/,
                }),
            });
    }
    get diyaAgent(): Locator {
        return this.agentMenu.getByRole("menuitem", {
            name: "Diya",
        });
    }

    get taraAgent(): Locator {
        return this.agentMenu.getByRole("menuitem", {
            name: "Tara",
        });
    }

    get kayalAgent(): Locator {
        return this.agentMenu.getByRole("menuitem", {
            name: "Kayal",
        });
    }

    get sendButton(): Locator {
        return this.alfredPage.getByTitle('Send message');
    }

    // =========================
    // Main Navigation Validation
    // =========================

    async validateMainNavigation(): Promise<void> {

        await expect(this.aiChat).toBeVisible({
            timeout: 15000,
        });

        await expect(this.aiChat).toHaveCount(1);

        await expect(this.myPosts).toBeVisible({
            timeout: 15000,
        });

        await expect(this.myPosts).toBeEnabled();

        await expect(this.myPosts).toHaveCount(1);

        await expect(this.socialMedia).toBeVisible({
            timeout: 15000,
        });

        await expect(this.socialMedia).toHaveCount(1);

        await expect(this.quickGuide).toBeVisible({
            timeout: 15000,
        });

        await expect(this.quickGuide).toBeEnabled();

        await expect(this.quickGuide).toHaveCount(1);
    }

    // =========================
    // Alfred Dropdown Validation
    // =========================

    async validateAlfredDropdown(): Promise<void> {

        // Alfred
        await expect(this.alfredDropdown).toBeVisible();
        await expect(this.alfredDropdown).toBeEnabled();
        await expect(this.alfredDropdown).toHaveCount(1);

        // Open dropdown
        await this.alfredDropdown.click();

        // Menu
        await expect(this.agentMenu).toBeVisible();

        // Diya
        await expect(this.diyaAgent).toBeVisible();
        await expect(this.diyaAgent).toBeEnabled();
        await expect(this.diyaAgent).toHaveCount(1);

        // Tara
        await expect(this.taraAgent).toBeVisible();
        await expect(this.taraAgent).toBeEnabled();
        await expect(this.taraAgent).toHaveCount(1);

        // Kayal
        await expect(this.kayalAgent).toBeVisible();
        await expect(this.kayalAgent).toBeEnabled();
        await expect(this.kayalAgent).toHaveCount(1);
    }

    get socialMediaHeading(): Locator {
        return this.alfredPage.getByRole("heading", {
            name: "Social Media Connections",
            exact: true,
        });
    }

    get socialMediaDescription(): Locator {
        return this.alfredPage.getByText(
            "Connect Your Social Media Accounts to Enable AI Drafting, Scheduling, and Direct Publishing.",
            { exact: true }
        );
    }

    get linkedInCard(): Locator {
        return this.alfredPage
            .locator("div.rounded-xl")
            .filter({
                has: this.alfredPage.getByText("LinkedIn", { exact: true }),
            });
    }

    get xCard(): Locator {
        return this.alfredPage
            .locator("div.rounded-xl")
            .filter({
                has: this.alfredPage.getByText("X", { exact: true }),
            });
    }

    get instagramCard(): Locator {
        return this.alfredPage
            .locator("div.rounded-xl")
            .filter({
                has: this.alfredPage.getByText("Instagram", { exact: true }),
            });
    }

    get facebookCard(): Locator {
        return this.alfredPage
            .locator("div.rounded-xl")
            .filter({
                has: this.alfredPage.getByText("Facebook", { exact: true }),
            });
    }



    // private alfredPage!: Page;

    // async validateAndClickGoToAlfred(): Promise<void> {

    //     await expect(this.goToAlfred).toBeVisible({
    //         timeout: 15000,
    //     });

    //     const newPagePromise =
    //         this.page.context().waitForEvent("page");

    //     await this.goToAlfred.click();

    //     this.alfredPage = await newPagePromise;

    //     await this.alfredPage.waitForLoadState("domcontentloaded");

    //     await expect(this.alfredPage).toHaveURL(
    //         /alfred\.simbli\.ai/,
    //         { timeout: 30000 }
    //     );

    //     await expect(
    //         this.alfredPage.getByText("AI Chat", { exact: true })
    //     ).toBeVisible({ timeout: 30000 });
    // }

    private alfredPage!: Page;

    async validateAndClickGoToAlfred(): Promise<void> {

        await expect(this.goToAlfred).toBeVisible({
            timeout: 15000,
        });

        await expect(this.goToAlfred).toHaveCount(1);

        const [alfredPage] = await Promise.all([
            this.page.context().waitForEvent("page", {
                timeout: 30000,
            }),
            this.goToAlfred.click(),
        ]);

        this.alfredPage = alfredPage;

        await this.alfredPage.waitForLoadState("domcontentloaded");

        await expect(this.alfredPage).toHaveURL(
            /alfred\.simbli\.ai/,
            { timeout: 30000 }
        );

        await expect(
            this.alfredPage.getByText("AI Chat", { exact: true })
        ).toBeVisible({
            timeout: 30000,
        });
    }

    async validateSocialMediaConnections(): Promise<void> {

        // Main heading
        await expect(this.socialMediaHeading).toBeVisible();

        // Description
        await expect(this.socialMediaDescription).toBeVisible();


        // =========================
        // LinkedIn
        // =========================

        await expect(this.linkedInCard).toBeVisible();

        await expect(
            this.linkedInCard.getByText("LinkedIn", { exact: true })
        ).toBeVisible();

        await expect(
            this.linkedInCard.getByText("Connected", { exact: true })
        ).toBeVisible();

        await expect(
            this.linkedInCard.getByText("Active", { exact: true })
        ).toBeVisible();

        await expect(
            this.linkedInCard.getByRole("button", {
                name: "Disconnect",
                exact: true,
            })
        ).toBeEnabled();


        // =========================
        // X
        // =========================

        await expect(this.xCard).toBeVisible();

        await expect(
            this.xCard.getByText("X", { exact: true })
        ).toBeVisible();

        await expect(
            this.xCard.getByText("Connected", { exact: true })
        ).toBeVisible();

        await expect(
            this.xCard.getByText("Active", { exact: true })
        ).toBeVisible();

        await expect(
            this.xCard.getByRole("button", {
                name: "Disconnect",
                exact: true,
            })
        ).toBeEnabled();


        // =========================
        // Instagram
        // =========================

        await expect(this.instagramCard).toBeVisible();

        await expect(
            this.instagramCard.getByText("Instagram", { exact: true })
        ).toBeVisible();

        await expect(
            this.instagramCard.getByText("Connected", { exact: true })
        ).toBeVisible();

        await expect(
            this.instagramCard.getByText("Active", { exact: true })
        ).toBeVisible();

        await expect(
            this.instagramCard.getByRole("button", {
                name: "Disconnect",
                exact: true,
            })
        ).toBeEnabled();


        // =========================
        // Facebook
        // =========================

        await expect(this.facebookCard).toBeVisible();

        await expect(
            this.facebookCard.getByText("Facebook", { exact: true })
        ).toBeVisible();

        await expect(
            this.facebookCard.getByText("Connected", { exact: true })
        ).toBeVisible();

        await expect(
            this.facebookCard.getByText("Active", { exact: true })
        ).toBeVisible();

        await expect(
            this.facebookCard.getByRole("button", {
                name: "Disconnect",
                exact: true,
            })
        ).toBeEnabled();
    }

    private async validateSocialMediaCard(
        card: Locator,
        mediaName: string
    ): Promise<void> {

        await expect(card).toBeVisible();

        await expect(
            card.getByText(mediaName, { exact: true })
        ).toBeVisible();

        await expect(
            card.getByText("Connected", { exact: true })
        ).toBeVisible();

        await expect(
            card.getByText("Active", { exact: true })
        ).toBeVisible();

        await expect(
            card.getByRole("button", { name: "Disconnect" })
        ).toBeEnabled();
    }

    async alfred_publish(): Promise<void> {

        const input = this.alfredPage.getByRole('textbox', {
            name: /create a/i
        });

        await expect(input).toBeVisible({ timeout: 15000 });
        await expect(input).toBeEnabled({ timeout: 15000 });

        await input.fill(`Generate a post based on the latest trending news in artificial intelligence.
Include:
- A powerful hook (1–2 lines)
- 3–5 key highlights from the news
- Real-world impact on professionals or businesses
- A personal insight or opinion
- A call to action encouraging discussion
- 5–7 relevant hashtags
Keep the tone engaging and informative.`);

        await expect(this.sendButton).toBeVisible();
        await expect(this.sendButton).toBeEnabled();

        const responses = this.alfredPage.locator('.response-chat');
        const responseCountBefore = await responses.count();

        await this.sendButton.click();

        await expect(async () => {
            expect(await responses.count()).toBeGreaterThan(responseCountBefore);
        }).toPass({ timeout: 120000 });

        const latestResponse = responses.last();


        const imageGenerateYes = latestResponse.getByRole('button', {
            name: 'Yes',
            exact: true
        });

        await expect(imageGenerateYes).toBeVisible({ timeout: 30000 });
        await expect(imageGenerateYes).toBeEnabled();
        await imageGenerateYes.click();

        const generatedImage = latestResponse.locator(
            '.image-chat-inter img.res-img'
        );

        await expect(generatedImage).toBeVisible({
            timeout: 120000
        });

        await expect(generatedImage).toHaveAttribute(
            'src',
            /.+/,
            { timeout: 120000 }
        );

        await expect
            .poll(
                async () =>
                    generatedImage.evaluate(
                        (img: HTMLImageElement) =>
                            img.complete && img.naturalWidth > 0
                    ),
                {
                    timeout: 120000,
                    intervals: [1000, 2000, 3000]
                }
            )
            .toBe(true);

        const publish = latestResponse.getByRole('button', {
            name: 'Publish Now'
        });

        await expect(publish).toBeVisible({ timeout: 120000 });
        await expect(publish).toBeEnabled();

        await publish.click();

        const publishConfirm = this.alfredPage.locator(
            'button.alfred-confirmation-modal-confirm'
        );

        await expect(publishConfirm).toBeVisible({ timeout: 60000 });
        await publishConfirm.click();

        const successHeading = latestResponse.locator('p.publish-screens');

        await expect(successHeading).toBeVisible({ timeout: 60000 });
        await expect(
            latestResponse.locator('p.publish-post-p')
        ).toBeVisible();
    }




    async alfred_scheduld() {

        const input = this.alfredPage.getByRole('textbox', {
            name: /create a/i
        });

        await expect(input).toBeVisible({ timeout: 15000 });
        await expect(input).toBeEnabled({ timeout: 15000 });

        await input.fill(`Generate a post based on the latest trending news in artificial intelligence.
Include:
- A powerful hook (1–2 lines)
- 3–5 key highlights from the news
- Real-world impact on professionals or businesses
- A personal insight or opinion
- A call to action encouraging discussion
- 5–7 relevant hashtags
Keep the tone engaging and informative.`);

        await expect(this.sendButton).toBeVisible();
        await expect(this.sendButton).toBeEnabled();

        const responses = this.alfredPage.locator('.response-chat');
        const responseCountBefore = await responses.count();

        await this.sendButton.click();

        await expect(async () => {
            expect(await responses.count()).toBeGreaterThan(responseCountBefore);
        }).toPass({ timeout: 120000 });

        const latestResponse = responses.last();


        const imageGenerateYes = latestResponse.getByRole('button', {
            name: 'Yes',
            exact: true
        });

        await expect(imageGenerateYes).toBeVisible({ timeout: 30000 });
        await expect(imageGenerateYes).toBeEnabled();
        await imageGenerateYes.click();

        const generatedImage = latestResponse.locator(
            '.image-chat-inter img.res-img'
        );

        await expect(generatedImage).toBeVisible({
            timeout: 120000
        });

        await expect(generatedImage).toHaveAttribute(
            'src',
            /.+/,
            { timeout: 120000 }
        );

        await expect
            .poll(
                async () =>
                    generatedImage.evaluate(
                        (img: HTMLImageElement) =>
                            img.complete && img.naturalWidth > 0
                    ),
                {
                    timeout: 120000,
                    intervals: [1000, 2000, 3000]
                }
            )
            .toBe(true);


        await expect(async () => {
            await expect(latestResponse.getByRole('button', { name: 'Publish Now' })).toBeVisible();
        }).toPass({ timeout: 120000 });


        const scheduleBtn = latestResponse.getByRole('button', { name: 'Schedule' });
        await expect(async () => {
            await expect(scheduleBtn).toBeVisible();
        }).toPass({ timeout: 60000 });
        await expect(scheduleBtn).toBeEnabled();

        if (await latestResponse.getByText('No content available').isVisible()) {
            throw new Error('AI response failed - No content generated');
        }

        await scheduleBtn.click();

        const dateInput = this.alfredPage.getByPlaceholder('dd-mm-yyyy');

        await expect(dateInput).toBeVisible({ timeout: 30000 });

        const today = new Date();
        await dateInput.fill(
            today.toISOString().split('T')[0]
        );

        const timeInput = this.alfredPage.getByRole('textbox', {
            name: 'Select time'
        });

        await expect(timeInput).toBeVisible();
        await timeInput.click();

        const setTimeModal = this.alfredPage.getByRole('heading', {
            name: 'Set time'
        });

        await expect(setTimeModal).toBeVisible();

        const setTimeDialog = this.alfredPage.locator('div').filter({
            has: setTimeModal,
        }).filter({
            has: this.alfredPage.getByRole('button', {
                name: 'Save',
                exact: true
            }),
        }).last();

        await setTimeDialog.getByRole('textbox').first().click();
        await setTimeDialog.getByText('06', { exact: true }).first().click();

        await setTimeDialog.getByRole('textbox').nth(1).click();
        await setTimeDialog.getByText('00', { exact: true }).first().click();

        await setTimeDialog.getByRole('textbox').nth(2).click();
        await setTimeDialog.getByText('PM', { exact: true }).click();

        const saveBtn = setTimeDialog.getByRole('button', {
            name: 'Save',
            exact: true
        });

        await expect(saveBtn).toBeVisible();
        await expect(saveBtn).toBeEnabled();
        await saveBtn.click();

        // Wait for time picker to close
        await expect(
            this.page.getByRole('heading', { name: 'Set time' })
        ).toBeHidden({ timeout: 5000 });
        // Wait for "Scheduled for" to appear on the page (single source of truth)
        await this.page
            .getByText('Scheduled for', { exact: false })
            .waitFor({ state: 'visible', timeout: 60000 });
        // Now scope to the schedule modal div (guaranteed to exist after the wait above)
        const scheduleModal = this.page.locator('div').filter({
            has: this.page.getByText('Schedule Your Post'),
        }).filter({
            has: this.page.getByText('Scheduled for'),
        }).last();
        await expect(
            scheduleModal.getByText('Scheduled for', { exact: false })
        ).toBeVisible();
        // Click final Schedule button
        const finalScheduleBtn = scheduleModal
            .getByRole('button', { name: 'Schedule' })
            .last();
        await expect(finalScheduleBtn).toBeVisible();
        await expect(finalScheduleBtn).toBeEnabled();
        await finalScheduleBtn.scrollIntoViewIfNeeded();
        await finalScheduleBtn.click();
        // Wait for success toast
        await expect(
            this.page.getByText('Successfully Scheduled', { exact: true })
        ).toBeVisible({ timeout: 60000 });

    }



    async alfred_page(): Promise<void> {
        await this.validateAndClickGoToAlfred();

        await this.validateMainNavigation();

        await this.validateAlfredDropdown();

        await this.socialMedia.click();

        await this.validateSocialMediaConnections();

        await this.aiChat.click();

        await this.alfred_publish();

        //await this.alfred_scheduld();

    }




}


