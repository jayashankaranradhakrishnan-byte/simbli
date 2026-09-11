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


    async validateAndClickGoToAlfred() {
        await expect(this.goToAlfred).toBeVisible();
        await expect(this.goToAlfred).toBeEnabled();

        await this.goToAlfred.click();
    }

    async alfred_page() {
        await this.validateAndClickGoToAlfred();

    }




}


