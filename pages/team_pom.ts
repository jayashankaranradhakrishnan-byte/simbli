import { Page, Locator } from '@playwright/test';

export class TeamPage {

    readonly page: Page;
    readonly teamLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.teamLink = page.getByRole('link', {
            name: 'Team',
            exact: true
        });
    }

    async clickTeam() {
        await this.teamLink.click();
    }

    async validateTeamPage() {
        await this.page.waitForLoadState('domcontentloaded');
    }
}

